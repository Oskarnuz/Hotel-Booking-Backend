import { Router } from 'express'

import { 
  getAllBookingsController, 
  createBookingController, 
  getBookingByIdController, 
  updateBookingController, 
  deleteBookingController 
} from './bookings.controller'

const router = Router()


router.get("/", getAllBookingsController);

router.get("/:id", getBookingByIdController);

router.post("/", createBookingController);

router.put("/:id", updateBookingController);

router.delete("/:id", deleteBookingController);

export default router