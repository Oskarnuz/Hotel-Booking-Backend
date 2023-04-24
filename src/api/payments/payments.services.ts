import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllPayments = () => {
  return prisma.payments.findMany({
    select: {
      CardFirstName: true,
      CardSecondName: true,
      CardBankEntity: true,
      CardNumber: true,
      CardType: true,
      CardYear: true,
      CardMonth: true,
      CardCcv: true,
      Status: true
    }
  })
}

export const createPayment = (input: any) => {
  return prisma.payments.create({
    data: {
      CardFirstName: input.CardFirstName,
      CardSecondName: input.CardSecondName,
      CardBankEntity: input.CardBankEntity,
      CardNumber: input.CardNumber,
      CardType: input.CardType,
      CardYear: input.CardYear,
      CardMonth: input.CardMonth,
      CardCcv: input.CardCcv,
      Status: input.Status
    }
  })
}

export const getPaymentById = (id: string) => {
  return prisma.payments.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      CardFirstName: true,
      CardSecondName: true,
      CardBankEntity: true,
      CardNumber: true,
      CardType: true,
      CardYear: true,
      CardMonth: true,
      CardCcv: true,
      Status: true,
      createdAt: true,
      updatedAt: true,
    }
  })
}

export const updatePayment = (id: string, input: any) => {
  return prisma.payments.update({
    where: {
      id: id,
    },
    data: {
      CardFirstName: input.CardFirstName,
      CardSecondName: input.CardSecondName,
      CardBankEntity: input.CardBankEntity,
      CardNumber: input.CardNumber,
      CardType: input.CardType,
      CardYear: input.CardYear,
      CardMonth: input.CardMonth,
      CardCcv: input.CardCcv,
      Status: input.Status
    }
  })
}

export function deletePayments(id: string) {
  return prisma.payments.delete({
    where: {
      id: id,
    },
  })
}