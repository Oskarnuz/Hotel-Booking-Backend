import { Router } from "express";

import {
  getAllTagsController,
  createTagsController,
  updateTagsController,
  deleteTagsController
} from './tags.controller'

const router = Router()


router.get("/", getAllTagsController);

router.post("/", createTagsController);

router.patch("/:id", updateTagsController);

router.delete("/:id", deleteTagsController);

export default router