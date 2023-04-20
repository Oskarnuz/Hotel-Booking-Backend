import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllTags = () => {
  return prisma.tags.findMany({
    select: {
      id: true,
      Name: true,
    }
  })
}

export const getTagById = (id: number) => {
  return prisma.tags.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Name: true
    }
  })
}

export const createTags = (input: any) => {
  return prisma.tags.create({
    data: {
      Name: input.Name,
    }
  })
}

export const updateTags = (id: number, input: any) => {
  return prisma.tags.update({
    where: {
      id: id,
    },
    data: {
      Name: input.Name,
    }
  })
}

export function deleteTags(id: number) {
  return prisma.tags.delete({
    where: {
      id: id,
    },
  });
}