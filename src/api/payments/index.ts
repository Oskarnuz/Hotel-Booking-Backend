import { Router } from "express";

import {
  getAllPaymentsController, createPaymentController, updatePaymentsController, deletePaymentsController
} from './payments.controller'

const router = Router()

router.get("/", getAllPaymentsController);

router.post("/", createPaymentController);

router.put("/:id", updatePaymentsController);

router.delete("/:id", deletePaymentsController);

export default router