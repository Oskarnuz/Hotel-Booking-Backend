import { Request, Response, NextFunction } from "express";

import { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom } from "./rooms.services";

export const getAllRoomsController = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rooms = await getAllRooms()
    res.status(200).json({ message: 'Rooms found', data: rooms })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createRoomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const room = await createRoom(req.body)
    res.status(201).json({ message: 'room created', data: room })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getRoomByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const room = await getRoomById(id)

    if(!room) {
      return res.status(404).json({ message: 'room not found' })
    }

    res.status(201).json({ message: 'room found', data: room })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}


export const updateRoomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const room = await updateRoom(id, req.body)

    if(!room) {
      return res.status(404).json({ message: 'room not found' })
    }

    res.status(201).json({ message: 'room updated', data: room })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRoomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const room = await deleteRoom(id);
    res.json(room);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}