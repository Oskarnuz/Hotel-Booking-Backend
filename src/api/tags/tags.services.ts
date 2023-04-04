import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllTags = () => {
  return prisma.tags.findMany({
    select: {
      id: true,
      tag1: true,
      tag2: true
    }
  })
}

export const createTags = (input: any) => {
  return prisma.tags.create({
    data: {
      tag1: input.tag1,
      tag2: input.tag2
    }
  })
}

export const updateTags = (id: string, input: any) => {
  return prisma.tags.update({
    where: {
      id: id,
    },
    data: {
      tag1: input.tag1,
      tag2: input.tag2
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