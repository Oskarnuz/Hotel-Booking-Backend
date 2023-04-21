import { Router } from "express";

import {
  getAllEmailSubscriptionController,
  createEmailSubscriptionController,
  deleteEmailSubscriptionController
} from './emailsubscription.controller'

const router = Router()


router.get("/", getAllEmailSubscriptionController);

router.post("/", createEmailSubscriptionController);

router.delete("/:id", deleteEmailSubscriptionController);

export default router