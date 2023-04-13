import { Router } from "express";

import {
  getAllPoliciesController,
  createPoliciesController,
  updatePoliciesController,
  deletePoliciesController
} from './policies.controller'

const router = Router()


router.get("/", getAllPoliciesController);

router.post("/", createPoliciesController);

router.patch("/:id", updatePoliciesController);

router.delete("/:id", deletePoliciesController);

export default router