import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllAmenities = () => {
  return prisma.amenities.findMany({
    select: {
      id: true,
      Name: true,
    }
  })
}

export const getAmenitiesById = (id: number) => {
  return prisma.amenities.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Name: true,
    }
  })
}

export const createAmenities = (input: any) => {
  return prisma.amenities.create({
    data: {
      Name: input.Name,
    }
  })
}

export const updateAmenities = (id: number, input: any) => {
  return prisma.amenities.update({
    where: {
      id: id,
    },
    data: {
      Name: input.Name
    }
  })
}

export function deleteAmenities(id: number) {
  return prisma.amenities.delete({
    where: {
      id: id,
    },
  });
}