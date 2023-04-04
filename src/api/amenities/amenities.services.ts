import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllAmenities = () => {
  return prisma.amenities.findMany({
    select: {
      id: true,
      amenity1: true,
      amenity2: true
    }
  })
}

export const createAmenities = (input: any) => {
  return prisma.amenities.create({
    data: {
      amenity1: input.amenity1,
      amenity2: input.amenity2
    }
  })
}

export const updateAmenities = (id: string, input: any) => {
  return prisma.amenities.update({
    where: {
      id: id,
    },
    data: {
      amenity1: input.amenity1,
      amenity2: input.amenity2
    }
  })
}

export function deleteAmenities(id: string) {
  return prisma.amenities.delete({
    where: {
      id: id,
    },
  });
}