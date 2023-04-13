import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllRooms = () => {
  return prisma.room.findMany({
    select: {
    id: true,
    Available: true,
    RoomImg: true,
    RoomName: true,
    Amenities: true,
    Inclusions: true,
    OriginalPricePerNight: true,
    Discount: true,
    About: true,
    Facility: true
    }
  })
}

export const createRoom = (input: any) => {
  return prisma.room.create({
    data: {
      Available: input.Available,
      RoomImg: input.RoomImg,
      RoomName: input.RoomName,
      Amenities: input.Amenities,
      Inclusions: input.Inclusions,
      OriginalPricePerNight: input.OriginalPricePerNight,
      Discount: input.Discount,
      About: input.About,
      Facility: input.Facility
    }
  })
}

export const getRoomById = (id: string) => {
  return prisma.room.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Available: true,
      RoomImg: true,
      RoomName: true,
      Amenities: true,
      Inclusions: true,
      OriginalPricePerNight: true,
      Discount: true,
      About: true,
      Facility: true
    }
  })
}

export const updateRoom = (id: string, input: any) => {
  return prisma.room.update({
    where: {
      id: id
    },
    data: {
      Available: input.Available,
      RoomImg: input.RoomImg,
      RoomName: input.RoomName,
      Amenities: input.Amenities,
      Inclusions: input.Inclusions,
      OriginalPricePerNight: input.OriginalPricePerNight,
      Discount: input.Discount,
      About: input.About,
      Facility: input.Facility
    }
  })
}

export function deleteRoom(id:string) {
  return prisma.room.delete({
    where: {
      id: id,
    },
  });
}