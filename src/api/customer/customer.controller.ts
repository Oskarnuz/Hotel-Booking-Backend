import { Response, Request, NextFunction } from "express";

import { getAllCustomers, updateCustomer, getCustomerById, deleteCustomer, createCustomer } from "./customer.services";
import { AuthCustomer } from "../../auth/auth.types";

export const getAllCustomersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await getAllCustomers()
    res.status(200).json({ message: 'Customers found', data: customer })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await createCustomer(req.body)
    res.status(201).json({ message: 'Customer created', data: customer })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getCustomerByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const customer = await getCustomerById(id)

    if(!customer) {
      return res.status(404).json({ message: 'Customer not found' })
    }
    res.status(201).json({ message: 'Customer found', data: customer })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
  
}

export const updateCustomerController = async (
  req: AuthCustomer,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.customer ? req.customer : ''

    const customer = await getCustomerById(id);

    const customerUpdated = await updateCustomer(id, {...req.body, password: customer?.password});
    res.status(200).json({ message: 'Customer updated', data: customerUpdated });

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const customer = await deleteCustomer(id);
    res.json(customer);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}