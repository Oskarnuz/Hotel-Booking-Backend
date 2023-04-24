import { Response, Request, NextFunction } from "express";

import { getAllUsers, updateUser, getUserById, deleteUser, createUser, updateUserPassword, updateUserRole, updateUserPicture } from "./users.services";
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
    res.status(500).json({ message: "It's not possible to show Users" })
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
    res.status(500).json({ message: "It's not possible create a User" })
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
    res.status(500).json({ message: "It's not possible to show a User" })
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
    res.status(500).json({ message: "It's not possible update a User" })
  }
}

export const updateUserPasswordController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : ''

    const UserUpdated = await updateUserPassword(id, {...req.body});
    res.status(200).json({ message: 'User password updated', data: UserUpdated });

  } catch(error: any) {
    res.status(500).json({ message: "It's not possible update User's password" })
  }
}

export const updateUserRoleController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : ''

    const UserUpdated = await updateUserRole(id, {...req.body});
    res.status(200).json({ message: 'User role updated', data: UserUpdated });

  } catch(error: any) {
    res.status(500).json({ message: "It's not possible update User's role" })
  }
}

export const updateUserPictureController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : ''

    const UserUpdated = await updateUserPicture(id, {...req.body});
    res.status(200).json({ message: 'User picture updated', data: UserUpdated });

  } catch(error: any) {
    res.status(500).json({ message: "It's not possible update User's picture" })
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
    res.status(500).json({ message: "It's not possible delete a User" })
  }
}