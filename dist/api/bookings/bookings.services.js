"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.getBookingById = exports.createBooking = exports.getAllBookings = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBookings = () => {
    return prisma.bookings.findMany({
        select: {
            id: true,
            HotelName: true,
            RoomType: true,
            CheckInDate: true,
            CheckOutDate: true,
            SpecialReqs: true,
            HotelCity: true,
            HotelCountry: true,
            NumberOfGuest: true,
            payments: true,
            Owner: true,
            createdAt: true,
        }
    });
};
exports.getAllBookings = getAllBookings;
const createBooking = (input, id) => {
    return prisma.bookings.create({
        data: {
            HotelName: input.HotelName,
            RoomType: input.RoomType,
            CheckInDate: input.CheckInDate,
            CheckOutDate: input.CheckOutDate,
            SpecialReqs: input.SpecialReqs,
            HotelCity: input.HotelCity,
            HotelCountry: input.HotelCountry,
            NumberOfGuest: input.NumberOfGuest,
            payments: input.payments,
            Owner: {
                connect: { id }
            }
        }
    });
};
exports.createBooking = createBooking;
const getBookingById = (id) => {
    return prisma.bookings.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            HotelName: true,
            RoomType: true,
            CheckInDate: true,
            CheckOutDate: true,
            SpecialReqs: true,
            HotelCity: true,
            HotelCountry: true,
            NumberOfGuest: true,
            payments: true
        }
    });
};
exports.getBookingById = getBookingById;
const updateBooking = (id, input) => {
    return prisma.bookings.update({
        where: {
            id: id
        },
        data: {
            HotelName: input.HotelName,
            RoomType: input.RoomType,
            CheckInDate: input.CheckInDate,
            CheckOutDate: input.CheckOutDate,
            SpecialReqs: input.SpecialReqs,
            HotelCity: input.HotelCity,
            HotelCountry: input.HotelCountry,
            NumberOfGuest: input.NumberOfGuest,
            payments: input.payments
        }
    });
};
exports.updateBooking = updateBooking;
const deleteBooking = (id) => {
    return prisma.bookings.delete({
        where: {
            id: id,
        },
    });
};
exports.deleteBooking = deleteBooking;
