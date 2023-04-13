import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllPolicies = () => {
  return prisma.policies.findMany({
    select: {
      id: true,
      name: true
    }
  })
}

export const createPolicies = (input: any) => {
  return prisma.policies.create({
    data: {
      name: input.name
    }
  })
}

export const updatePolicies = (id: string, input: any) => {
  return prisma.policies.update({
    where: {
      id: id,
    },
    data: {
      name: input.name
    }
  })
}

export function deletePolicies(id: string) {
  return prisma.policies.delete({
    where: {
      id: id,
    },
  });
}