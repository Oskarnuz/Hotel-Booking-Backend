import { Request, Response, NextFunction } from "express";

import { getAllInclusions, createInclusions, updateInclusions, deleteInclusions, getInclusionById } from "./inclusions.services";

export const getAllInclusionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inclusions = await getAllInclusions()
    res.status(200).json({ message: 'Inclusions found', data: inclusions })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getInclusionByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const inclusion = await getInclusionById(id)

    if(!inclusion) {
      return res.status(404).json({ message: 'Inclusion not found '})
    }
    res.status(201).json({ message: 'Inclusion Found', data: inclusion })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createInclusionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inclusions = await createInclusions(req.body)
    res.status(201).json({ message: 'Inclusions created', data: inclusions })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateInclusionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const inclusions = await updateInclusions(id, req.body)

    if(!inclusions) {
      return res.status(404).json({ message: 'Inclusions not found' })
    }

    res.status(201).json({ message: 'Inclusions updated', data: inclusions })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteInclusionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const inclusions = await deleteInclusions(id);
    res.json(inclusions);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}