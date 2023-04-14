import { Router } from "express";

import {
  getAllTagsController,
  createTagsController,
  updateTagsController,
  deleteTagsController,
  getTagByIdController
} from './tags.controller'

const router = Router()


router.get("/", getAllTagsController);

router.post("/", createTagsController);

router.patch("/:id", updateTagsController);

router.delete("/:id", deleteTagsController);

router.get("/:id", getTagByIdController)

export default router