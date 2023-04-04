import { Router } from "express";

import {
  getAllAmenitiesController,
  createAmenitiesController,
  updateAmenitiesController,
  deleteAmenitiesController
} from './Amenities.controller'

const router = Router()


router.get("/", getAllAmenitiesController);

router.post("/", createAmenitiesController);

router.patch("/:id", updateAmenitiesController);

router.delete("/:id", deleteAmenitiesController);

export default router