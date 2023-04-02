import { Request, Response, NextFunction } from "express";

import { getAllHotels, createHotel, updateHotels, deleteHotels } from "./hotels.services";
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
    res.status(500).json({ message: error.message })
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
  res.status(505).json({ message: error.message })
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
    res.status(500).json({ message: error.message })
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
    res.status(500).json({ message: error.message })
  }
}