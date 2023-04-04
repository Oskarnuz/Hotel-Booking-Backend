import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllPolicies = () => {
  return prisma.policies.findMany({
    select: {
      id: true,
      policy1: true,
      policy2: true
    }
  })
}

export const createPolicies = (input: any) => {
  return prisma.policies.create({
    data: {
      policy1: input.policy1,
      policy2: input.policy2
    }
  })
}

export const updatePolicies = (id: string, input: any) => {
  return prisma.policies.update({
    where: {
      id: id,
    },
    data: {
      policy1: input.policy1,
      policy2: input.policy2
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