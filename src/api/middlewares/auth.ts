import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../auth/auth.services";
import { AuthCustomer } from "../../auth/auth.types";

export const auth = (req: AuthCustomer, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers

    if(!authorization){
      throw new Error('Session expired')
    }

    const [_, token] = authorization.split(' ')

    if(!token) {
      throw new Error('Session expired')
    }

    const { id } = verifyToken(token) as { id: string  }

    req.customer = id

    next() 
  } catch(error: any) {
    res.status(401).json({ message: error.message })
  }
}