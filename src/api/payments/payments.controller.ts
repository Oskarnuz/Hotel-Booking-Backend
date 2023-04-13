import { Request, Response, NextFunction } from "express";

import { getAllPayments, createPayment, updatePayment, deletePayments, getPaymentById } from "./payments.services";

export const getAllPaymentsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Payments = await getAllPayments()
    res.status(200).json({ message: 'Payment Found', data: Payments })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createPaymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Payment = await createPayment(req.body)
    res.status(201).json({ message: 'Payment Created', data: Payment})
  } catch(error: any) {
    res.status(505).json({ message: error.message })
  }
}

export const updatePaymentsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const Payment = await updatePayment(id, req.body)

    if(!Payment) {
      return res.status(404).json({ message: 'Payment not exist' })
    }

    res.status(201).json({message: 'Payment Updated', data: Payment })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePaymentsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Payments = await deletePayments(id);
    res.json(Payments);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}