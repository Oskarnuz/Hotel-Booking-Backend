import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// CRUD 
export const getAllCustomers = () => {
  return prisma.customer.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      gender: true,
      streetAddress: true,
      city: true,
      state: true,
      zipCode: true,
      email: true,
      phoneNumber: true,
      password: true,
      bookings: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

// Create

export const createCustomer = (input: any) => {
  return prisma.customer.create({
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      gender: input.gender,
      streetAddress: input.streetAddress,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      email: input.email,
      phoneNumber: input.phoneNumber,
      password: input.password,
      bookings: input.bookings
    }
    
  })
}

export const getCustomerById = (id: string) => {
  return prisma.customer.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      gender: true,
      streetAddress: true,
      city: true,
      state: true,
      zipCode: true,
      email: true,
      phoneNumber: true,
      password: true,
      bookings: true,
      createdAt: true,
      updatedAt: true
    }
  
  })
}

export const updateCustomer = (id: string, input: any) => {
  return prisma.customer.update({
    where: {
      id: id,
    },
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      gender: input.gender,
      streetAddress: input.streetAddress,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      email: input.email,
      phoneNumber: input.phoneNumber,
      password: input.password,
      bookings: input.bookings
    }
  })
}

export const deleteCustomer = (id: string) => {
  return prisma.customer.delete({
    where: {
      id: id,
    },
  })
}