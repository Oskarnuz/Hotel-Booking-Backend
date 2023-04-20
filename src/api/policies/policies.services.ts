import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllPolicies = () => {
  return prisma.policies.findMany({
    select: {
      id: true,
      Name: true
    }
  })
}

export const createPolicies = (input: any) => {
  return prisma.policies.create({
    data: {
      Name: input.Name
    }
  })
}

export const updatePolicies = (id: number, input: any) => {
  return prisma.policies.update({
    where: {
      id: id,
    },
    data: {
      Name: input.Name
    }
  })
}

export function deletePolicies(id: number) {
  return prisma.policies.delete({
    where: {
      id: id,
    },
  });
}