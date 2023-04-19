import { Request, Response, NextFunction } from "express";

import { getAllPolicies, createPolicies, updatePolicies, deletePolicies } from "./policies.services";

export const getAllPoliciesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Policies = await getAllPolicies()
    res.status(200).json({ message: 'Policies found', data: Policies })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createPoliciesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Policies = await createPolicies(req.body)
    res.status(201).json({ message: 'Policies created', data: Policies })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updatePoliciesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const Policies = await updatePolicies(Number(id), req.body)

    if(!Policies) {
      return res.status(404).json({ message: 'Policies not found' })
    }

    res.status(201).json({ message: 'Policies updated', data: Policies })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePoliciesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Policies = await deletePolicies(Number(id));
    res.json(Policies);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}