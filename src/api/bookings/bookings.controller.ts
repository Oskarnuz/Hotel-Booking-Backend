import { Response, Request, NextFunction } from "express";
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from "./bookings.services";
import { sendNodeMailer } from "../../config/nodemailer";
import { bookingEmail } from "../../utils/bookingEmail";

export const getAllBookingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const booking = await getAllBookings()
    res.status(200).json({ message: 'Booking Found', data: booking })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getBookingByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const booking = await getBookingById(id)

    if(!booking) {
      return res.status(404).json({ message: 'Booking not found '})
    }
    res.status(201).json({ message: 'Booking Found', data: booking })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const booking = await createBooking(req.body)
    await sendNodeMailer(bookingEmail(booking))
    res.status(201).json({ message: 'Booking Created', data: booking })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const booking = await updateBooking(id, req.body)

    if(!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    res.status(201).json({ message: 'Booking updated', data: booking})
  } catch(error: any) {
    res.status(500).json({ message: error.message})
  }
}

export const deleteBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const booking = await deleteBooking(id);
    res.json(booking);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}