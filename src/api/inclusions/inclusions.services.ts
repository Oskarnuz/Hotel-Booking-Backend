import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllInclusions = () => {
  return prisma.inclusions.findMany({
    select: {
      id: true,
      name: true,
    }
  })
}

export const createInclusions = (input: any) => {
  return prisma.inclusions.create({
    data: {
      name: input.name,
    }
  })
}

export const updateInclusions = (id: string, input: any) => {
  return prisma.inclusions.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
    }
  })
}

export function deleteInclusions(id: string) {
  return prisma.inclusions.delete({
    where: {
      id: id,
    },
  });
}