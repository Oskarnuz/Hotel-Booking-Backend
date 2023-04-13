import { Router } from "express";

import {
  getAllInclusionsController,
  createInclusionsController,
  updateInclusionsController,
  deleteInclusionsController,
  getInclusionByIdController
} from './inclusions.controller'

const router = Router()


router.get("/", getAllInclusionsController);

router.post("/", createInclusionsController);

router.patch("/:id", updateInclusionsController);

router.delete("/:id", deleteInclusionsController);

router.get('/:id', getInclusionByIdController)

export default router