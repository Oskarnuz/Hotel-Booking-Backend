import { Request, Response, NextFunction } from "express";

import { getAllEmailSubscription, createEmailSubscription, deleteEmailSubscription } from "./emailsubscription.services";
import { sendNodeMailer } from "../../config/nodemailer"
import { newsletterEmail } from "../../utils/newsletterEmail";


export const getAllEmailSubscriptionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const EmailSubscription = await getAllEmailSubscription()
    res.status(200).json({ message: 'EmailSubscription found', data: EmailSubscription })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createEmailSubscriptionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const EmailSubscription = await createEmailSubscription(req.body)
    await sendNodeMailer(newsletterEmail(req.body.Email))
    res.status(201).json({ message: 'EmailSubscription created', data: EmailSubscription })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteEmailSubscriptionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const EmailSubscription = await deleteEmailSubscription(Number(id));
    res.json(EmailSubscription);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}