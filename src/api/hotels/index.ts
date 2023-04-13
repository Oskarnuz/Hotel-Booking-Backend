import { Router } from "express";

import {
  getAllHotelsController,
  createHotelController,
  updateHotelsController,
  deleteHotelsController,
  getHotelByIdController
} from './hotels.controller'

const router = Router()

router.get("/", getAllHotelsController);

router.post("/", createHotelController);

router.put("/:id", updateHotelsController);

router.delete("/:id", deleteHotelsController);

router.get('/:id', getHotelByIdController)

export default router