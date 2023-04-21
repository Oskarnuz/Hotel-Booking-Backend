import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// CRUD 
export const getAllUsers = () => {
  return prisma.users.findMany({
    select: {
      id: true,
      fullName: true,
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
      picture: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

// Create

export const createUser = (input: any) => {
  const roleId = "clgomzk770002u4n5dai0m910"
      
  return prisma.users.create({
    data: {
      fullName: input.fullName,
      gender: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: input.email,
      phoneNumber: "",
      password: input.password,
      bookings: input.bookings,
      role: {
        connect: { id: roleId },
      },
      picture: "",
      },    
  })
}

export const getUserById = (id: string) => {
  return prisma.users.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      fullName: true,
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
      picture: true,
      createdAt: true,
      updatedAt: true,
    }
  
  })
}

export const updateUser = (id: string, input: any) => {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      fullName: input.fullName,
      gender: input.gender,
      streetAddress: input.streetAddress,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      email: input.email,
      phoneNumber: input.phoneNumber,
      password: input.password,
      bookings: input.bookings,
      role: input.role,
      picture: input.picture,
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