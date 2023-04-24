import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllEmailSubscription = () => {
  return prisma.emailSubcribers.findMany({
    select: {
      id: true,
      Email: true
    }
  })
}

export const createEmailSubscription = (input: any) => {
  return prisma.emailSubcribers.create({
    data: {
      Email: input.email
    }
  })
}

export function deleteEmailSubscription(id: number) {
  return prisma.emailSubcribers.delete({
    where: {
      id: id,
    },
  });
}
