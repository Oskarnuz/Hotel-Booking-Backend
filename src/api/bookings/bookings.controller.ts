import { Response, Request, NextFunction } from "express";

import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "./bookings.services";
import { signToken, verifyToken } from "../../auth/auth.services";
import { sendNodeMailer } from "../../config/nodemailer";
import { bookingEmail } from "../../utils/bookingEmail";
import { getUserById } from "../users/users.services";

export const getAllBookingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const booking = await getAllBookings();
    res.status(200).json({ message: "Booking Found", data: booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const booking = await getBookingById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found " });
    }
    res.status(201).json({ message: "Booking Found", data: booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("You need to be authorized to access this information");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("Invalid Token!");
    }

    const { id } = verifyToken(token) as { id: string };

    const booking = await createBooking(req.body, id);
    const user = await getUserById(id);

    await sendNodeMailer(bookingEmail(booking, user));
    res.status(201).json({ message: "Booking Created", data: booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const booking = await updateBooking(id, req.body);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(201).json({ message: "Booking updated", data: booking });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const booking = await deleteBooking(id);
    res.json(booking);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
