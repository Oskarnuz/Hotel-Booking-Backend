import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllRoles = () => {
  return prisma.roles.findMany({
    select: {
      id: true,
      Name: true,
    }
  })
}

export const getRolesById = (id: number) => {
  return prisma.roles.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Name: true,
    }
  })
}

export const createRoles = (input: any) => {
  return prisma.roles.create({
    data: {
      Name: input.Name,
    }
  })
}

export const updateRoles = (id: number, input: any) => {
  return prisma.roles.update({
    where: {
      id: id,
    },
    data: {
      Name: input.Name
    }
  })
}

export function deleteRoles(id: number) {
  return prisma.roles.delete({
    where: {
      id: id,
    },
  });
}