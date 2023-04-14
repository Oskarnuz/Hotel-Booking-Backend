import { Request, Response, NextFunction } from "express";

import { getAllTags, createTags, updateTags, deleteTags, getTagById } from "./tags.services";

export const getAllTagsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tags = await getAllTags()
    res.status(200).json({ message: 'Tags found', data: tags })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getTagByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const tag = await getTagById(id)

    if(!tag) {
      return res.status(404).json({ message: 'Tag not found' })
    }

    res.status(201).json({ message: 'Tag found', data: tag })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createTagsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tags = await createTags(req.body)
    res.status(201).json({ message: 'Tags created', data: tags })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTagsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const tags = await updateTags(id, req.body)

    if(!tags) {
      return res.status(404).json({ message: 'Tags not found' })
    }

    res.status(201).json({ message: 'Tags updated', data: tags })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTagsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const tags = await deleteTags(id);
    res.json(tags);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}