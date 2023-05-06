import { Response, Request, NextFunction } from "express";
import bcrypt from "bcrypt";

import {
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
  createUser,
  updateUserPassword,
  updateUserRole,
  updateUserPicture,
  recoverPassword,
} from "./users.services";
import { AuthUser } from "../../auth/auth.types";
import { sendNodeMailer } from "../../config/nodemailer";
import { recoverEmail } from "../../utils/recoverEmail";
export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUsers();
    res.status(200).json({ message: "Users found", data: user });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible to show Users" });
  }
};
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: "User created", data: user });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible create a User" });
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({ message: "User found", data: user });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible to show a User" });
  }
};
export const updateUserController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : "";
    const user = await getUserById(id);
    const UserUpdated = await updateUser(id, {
      ...req.body,
      password: user?.password,
    });
    res.status(200).json({ message: "User updated", data: UserUpdated });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible update a User" });
  }
};

export const updateUserPasswordController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : "";
    const newPassword = req.body.password;

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const UserUpdated = await updateUserPassword(id, {
      password: hashedPassword,
    });

    res
      .status(200)
      .json({ message: "User password updated", data: UserUpdated });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "It's not possible update User's password" });
  }
};

export const updateUserRoleController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.body.userId;

    const UserUpdated = await updateUserRole(id, { ...req.body });
    res.status(200).json({ message: "User role updated", data: UserUpdated });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible update User's role" });
  }
};

export const updateUserPictureController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : "";

    const UserUpdated = await updateUserPicture(id, { ...req.body });

    res
      .status(200)
      .json({ message: "User picture updated", data: UserUpdated });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "It's not possible update User's picture" });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible delete a User" });
  }
};

export const recoverPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let password = "";

    // Add one random uppercase letter
    password += uppercaseLetters.charAt(
      Math.floor(Math.random() * uppercaseLetters.length)
    );

    // Add one random number
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));

    // Add six random characters
    for (let i = 0; i < 6; i++) {
      const randomChar = Math.floor(Math.random() * 3);
      password += [lowercaseLetters, uppercaseLetters, numbers][
        randomChar
      ].charAt(
        Math.floor(
          Math.random() *
            [lowercaseLetters, uppercaseLetters, numbers][randomChar].length
        )
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await recoverPassword(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const UserUpdated = await updateUserPassword(user.id, {
      password: hashedPassword,
    });
    await sendNodeMailer(recoverEmail(password, UserUpdated));
    res.status(201).json({ message: "Password Recovered", data: password });
  } catch (error: any) {
    res.status(500).json({ message: "It's not possible to show a User" });
  }
};
