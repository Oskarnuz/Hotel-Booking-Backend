import { Request, Response, NextFunction } from "express";

import { getAllHotels, createHotel, updateHotels, deleteHotels, getHotelById } from "./hotels.services";
import { request } from "http";

export const getAllHotelsController = async (
req: Request,
res: Response,
next: NextFunction
) => {
  try {
    const Hotels = await getAllHotels()
    res.status(200).json({ message: 'Hotels Found', data: Hotels })
  }catch(error: any) {
    res.status(500).json({ message: "It's not possible to show Hotels" })
  }
}

export const getHotelByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const hotel = await getHotelById(id)

    if(!hotel) {
      return res.status(404).json({ message: 'Hotel not found '})
    }
    res.status(201).json({ message: 'Hotel Found', data: hotel })
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible to show a Hotel" })
  }
}

export const createHotelController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  const Hotel = await createHotel(req.body)
  res.status(201).json({ message: 'Hotel Created', data: Hotel })
  } catch(error: any) {
  res.status(505).json({ message: "It's not possible create a Hotel" })
  }
}

export const updateHotelsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const Hotel = await updateHotels(id, req.body)

    if(!Hotel) {
      return res.status(404).json({ message: 'Hotel not exist' })
    }

    res.status(201).json({message: 'Hotel Updated', data: Hotel })
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible update a Hotel" })
  }
}

export const deleteHotelsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Hotels = await deleteHotels(id);
    res.json(Hotels);
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible delete a Hotel" })
  }
}