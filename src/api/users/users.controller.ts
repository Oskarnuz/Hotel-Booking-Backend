import { Response, Request, NextFunction } from "express";

import { getAllUsers, updateUser, getUserById, deleteUser, createUser } from "./users.services";
import { AuthUser } from "../../auth/auth.types";

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUsers()
    res.status(200).json({ message: 'Users found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User created', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)

    if(!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(201).json({ message: 'User found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUserController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : ''

    const user = await getUserById(id);

    const UserUpdated = await updateUser(id, {...req.body, password: user?.password});
    res.status(200).json({ message: 'User updated', data: UserUpdated });

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}