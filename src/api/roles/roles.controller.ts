import { Request, Response, NextFunction } from "express";

import { getAllRoles, createRoles, updateRoles, deleteRoles, getRolesById } from "./roles.services";

export const getAllRolesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const roles = await getAllRoles()
    res.status(200).json({ message: 'Roles found', data: roles })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getRolesByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const role = await getRolesById(id)

    if(!role) {
      return res.status(404).json({ message: 'Amenity not found '})
    }
    res.status(201).json({ message: 'Role Found', data: role })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createRolesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const roles = await createRoles(req.body)
    res.status(201).json({ message: 'Roles created', data: roles })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateRolesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const roles = await updateRoles(id, req.body)

    if(!roles) {
      return res.status(404).json({ message: 'Roles not found' })
    }

    res.status(201).json({ message: 'Roles updated', data: roles })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRolesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Roles = await deleteRoles(id);
    res.json(Roles);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}