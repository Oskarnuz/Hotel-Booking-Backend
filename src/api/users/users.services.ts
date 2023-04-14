import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// CRUD 
export const getAllUsers = () => {
  return prisma.users.findMany({
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
      role: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

// Create

export const createUser = (input: any) => {
  return prisma.users.create({
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
      bookings: input.bookings,
      role: input.role
    }
    
  })
}

export const getUserById = (id: string) => {
  return prisma.users.findUnique({
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
      updatedAt: true,
      role: true
    }
  
  })
}

export const updateUser = (id: string, input: any) => {
  return prisma.users.update({
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
      bookings: input.bookings,
      role: input.role
    }
  })
}

export const deleteUser = (id: string) => {
  return prisma.users.delete({
    where: {
      id: id,
    },
  })
}