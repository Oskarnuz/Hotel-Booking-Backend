import { Router } from "express";

import {
  getAllRolesController,
  createRolesController,
  updateRolesController,
  deleteRolesController,
  getRolesByIdController
} from './roles.controller'

const router = Router()


router.get("/", getAllRolesController);

router.post("/", createRolesController);

router.patch("/:id", updateRolesController);

router.delete("/:id", deleteRolesController);

router.get("/:id", getRolesByIdController)

export default router