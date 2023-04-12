import { Request } from 'express'

export interface AuthCustomer extends Request {
  customer?: string
}