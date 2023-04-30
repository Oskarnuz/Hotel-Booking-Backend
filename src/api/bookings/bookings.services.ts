import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllBookings = () => {
  return prisma.bookings.findMany({
    select: {
      id: true,
      HotelName: true,
      RoomType: true,
      DateOfStay:true,
      NumberOfGuest:true,
      payments:true,
      Owner: true
    }
  })
}

export const createBooking = (input: any, id: string) => {
  return prisma.bookings.create({
    data: {
      HotelName: input.HotelName,
      RoomType: input.RoomType,
      DateOfStay:input.DateOfStay,
      NumberOfGuest:input.NumberOfGuest,
      payments: input.payments,
      Owner: {
        connect: { id }
      }
    }
  })
}

export const getBookingById = (id: string) => {
  return prisma.bookings.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      HotelName: true,
      RoomType: true,
      DateOfStay:true,
      NumberOfGuest:true,
      payments:true
    }
  })
}

export const updateBooking = (id: string, input: any) => {
  return prisma.bookings.update({
    where: {
      id: id
    },
    data: {
      HotelName: input.HotelName,
      RoomType: input.RoomType,
      DateOfStay:input.DateOfStay,
      NumberOfGuest:input.NumberOfGuest,
      payments: input.payments
    }
  })
}

export const deleteBooking = (id: string) => {
  return prisma.bookings.delete({
    where: {
      id: id,
    },
  })
}