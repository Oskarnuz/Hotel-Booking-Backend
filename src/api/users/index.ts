import { Router } from "express";

import { getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController } from "./users.controller"
import { auth } from "../middlewares/auth";


const router = Router()

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/", createUserController);
router.put("/:id", auth, updateUserController);
router.delete("/:id", auth, deleteUserController);


export default router