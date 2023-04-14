import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllTags = () => {
  return prisma.tags.findMany({
    select: {
      id: true,
      name: true,
    }
  })
}

export const getTagById = (id: string) => {
  return prisma.tags.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      name: true
    }
  })
}

export const createTags = (input: any) => {
  return prisma.tags.create({
    data: {
      name: input.name,
    }
  })
}

export const updateTags = (id: string, input: any) => {
  return prisma.tags.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
    }
  })
}

export function deleteTags(id: string) {
  return prisma.tags.delete({
    where: {
      id: id,
    },
  });
}