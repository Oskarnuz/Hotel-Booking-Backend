import { createCustomer } from "../../api/customer/customer.services";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { login } from "../auth.services";
import { signToken } from "../auth.services";

export const signupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { firstName, lastName, email } = req.body
    const encPassword = await bcrypt.hash(req.body.password, 10)
    const customer = await createCustomer({...req.body, password: encPassword})

    const token = signToken({ id: customer.id})

    res.status(201).json({ message: 'Customer Created', data: { firstName, lastName, email }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const loginController = async(
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body

    const customer = await login(email)

    if(!customer) {
      throw new Error('Invalid email or password')
    }

    const isValid = await bcrypt.compare(password, customer.password)

    if(!isValid) {
      throw new Error('Invalid email or password')
    }

    const { id, firstName, lastName } = customer

    const token = signToken({ id: customer.id })

    res.status(201).json({ message: 'Customer login successfully', data: { email, firstName, lastName }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message})
  }
}