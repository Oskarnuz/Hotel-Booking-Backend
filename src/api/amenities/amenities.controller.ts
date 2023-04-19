import { Request, Response, NextFunction } from "express";

import { getAllAmenities, createAmenities, updateAmenities, deleteAmenities, getAmenitiesById } from "./amenities.services";

export const getAllAmenitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Amenities = await getAllAmenities()
    res.status(200).json({ message: 'Amenities found', data: Amenities })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getAmenitiesByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const amenity = await getAmenitiesById(Number(id))

    if(!amenity) {
      return res.status(404).json({ message: 'Amenity not found '})
    }
    res.status(201).json({ message: 'Amenity Found', data: amenity })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createAmenitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Amenities = await createAmenities(req.body)
    res.status(201).json({ message: 'Amenities created', data: Amenities })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateAmenitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const Amenities = await updateAmenities(Number(id), req.body)

    if(!Amenities) {
      return res.status(404).json({ message: 'Amenities not found' })
    }

    res.status(201).json({ message: 'Amenities updated', data: Amenities })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteAmenitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Amenities = await deleteAmenities(Number(id));
    res.json(Amenities);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}