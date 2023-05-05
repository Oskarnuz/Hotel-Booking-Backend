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
    res.status(500).json({ message: "It's not possible to show Rooms" })
  }
}

export const createRoomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const room = await createRoom(req.body)
    res.status(201).json({ message: 'Room created', data: room })
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible to create a Room" })
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
      return res.status(404).json({ message: 'Room not found' })
    }

    res.status(201).json({ message: 'Room found', data: room })
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible to show a Room" })
  }
}


export const updateRoomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    console.log(req.body)
    const room = await updateRoom(id, req.body)

    if(!room) {
      return res.status(404).json({ message: 'Room not found' })
    }
    res.status(201).json({ message: 'Room updated', data: room })
  } catch(error: any) {
    res.status(500).json({ message: "It's not possible update a Room" })
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
    res.status(500).json({ message: "It's not possible delete a Room" })
  }
}