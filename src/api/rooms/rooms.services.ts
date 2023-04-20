import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllRooms = () => {
  return prisma.rooms.findMany({
    select: {
    id: true,
    Available: true,
    RoomImg: true,
    RoomName: true,
    OriginalPricePerNight: true,
    Discount: true,
    About: true,
    Facility: true,
    Amenities: true,
    Inclusions: true,
    Hotels: true
    }
  })
}

export const createRoom = (input: any) => {
  return prisma.rooms.create({
    data: {
      Available: input.Available,
      RoomImg: input.RoomImg,
      RoomName: input.RoomName,
      OriginalPricePerNight: input.OriginalPricePerNight,
      Discount: input.Discount,
      About: input.About,
      Facility: input.Facility,
      // Amenities: input.Amenities,
      // Inclusions: input.Inclusions,
      Hotels: input.Hotels
    }
  })
}

export const getRoomById = (id: string) => {
  return prisma.rooms.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      Available: true,
      RoomImg: true,
      RoomName: true,
      OriginalPricePerNight: true,
      Discount: true,
      About: true,
      Facility: true,
      Amenities: true,
      Inclusions: true,
      Hotels: true
    }
  })
}

export const updateRoom = (id: string, input: any) => {
  return prisma.rooms.update({
    where: {
      id: id
    },
    data: {
      Available: input.Available,
      RoomImg: input.RoomImg,
      RoomName: input.RoomName,
      OriginalPricePerNight: input.OriginalPricePerNight,
      Discount: input.Discount,
      About: input.About,
      Facility: input.Facility,
      Amenities: input.Amenities,
      Inclusions: input.Inclusions,
      Hotels: input.Hotels
    }
  })
}

export function deleteRoom(id:string) {
  return prisma.rooms.delete({
    where: {
      id: id,
    },
  });
}