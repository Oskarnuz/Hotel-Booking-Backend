import { Router } from "express";

import {
  getAllHotelsController,
  createHotelController,
  updateHotelsController,
  deleteHotelsController
} from './hotels.controller'

const router = Router()

router.get("/", getAllHotelsController);

router.post("/", createHotelController);

router.put("/:id", updateHotelsController);

router.delete("/:id", deleteHotelsController);

export default router