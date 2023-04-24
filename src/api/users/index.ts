import { Router } from "express";

import { getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController, updateUserPasswordController, updateUserPictureController, updateUserRoleController } from "./users.controller"
import { auth } from "../middlewares/auth";


const router = Router()

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/", createUserController);
router.put("/:id", auth, updateUserController);
router.put("/:id", auth, updateUserPasswordController);
router.put("/:id", auth, updateUserRoleController);
router.put("/:id", auth, updateUserPictureController);

router.delete("/:id", auth, deleteUserController);


export default router