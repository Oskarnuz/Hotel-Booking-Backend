import { Router } from "express";

import { getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController, updateUserPasswordController, updateUserPictureController, updateUserRoleController,
recoverPasswordController } from "./users.controller"
import { auth } from "../middlewares/auth";


const router = Router()

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/", createUserController);
router.put("/:id", auth, updateUserController);
router.put("/:id/password", auth, updateUserPasswordController);
router.put("/:id/role", auth, updateUserRoleController);
router.put("/:id/picture", auth, updateUserPictureController);
router.post("/recover", recoverPasswordController)

router.delete("/:id", auth, deleteUserController);


export default router