import { Router } from "express";

import {
  getAllAmenitiesController,
  createAmenitiesController,
  updateAmenitiesController,
  deleteAmenitiesController,
  getAmenitiesByIdController
} from './amenities.controller'

const router = Router()


router.get("/", getAllAmenitiesController);

router.post("/", createAmenitiesController);

router.patch("/:id", updateAmenitiesController);

router.delete("/:id", deleteAmenitiesController);

router.get('/:id', getAmenitiesByIdController)

export default router