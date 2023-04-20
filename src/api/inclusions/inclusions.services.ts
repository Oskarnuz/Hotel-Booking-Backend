import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllInclusions = () => {
  return prisma.inclusions.findMany({
    select: {
      id: true,
      Name: true,
    }
  })
}

export const getInclusionById = (id: number) => {
  return prisma.inclusions.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Name: true,
    }
  })
}

export const createInclusions = (input: any) => {
  return prisma.inclusions.create({
    data: {
      Name: input.name,
    }
  })
}

export const updateInclusions = (id: number, input: any) => {
  return prisma.inclusions.update({
    where: {
      id: id,
    },
    data: {
      Name: input.Name,
    }
  })
}

export function deleteInclusions(id: number) {
  return prisma.inclusions.delete({
    where: {
      id: id,
    },
  });
}