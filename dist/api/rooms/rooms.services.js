"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.getRoomById = exports.createRoom = exports.getAllRooms = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllRooms = () => {
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
            Hotels: true,
        },
    });
};
exports.getAllRooms = getAllRooms;
const createRoom = (input) => {
    return prisma.rooms.create({
        data: {
            Available: input.Available,
            RoomImg: input.RoomImg,
            RoomName: input.RoomName,
            OriginalPricePerNight: input.OriginalPricePerNight,
            Discount: input.Discount,
            About: input.About,
            Facility: input.Facility,
            Hotels: {
                connect: {
                    id: input.hotelsId,
                },
            },
            Amenities: input.Amenities,
            Inclusions: input.Iclusions,
        },
    });
};
exports.createRoom = createRoom;
const getRoomById = (id) => {
    return prisma.rooms.findUnique({
        where: {
            id: id,
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
            Hotels: true,
        },
    });
};
exports.getRoomById = getRoomById;
const updateRoom = (id, input) => {
    return prisma.rooms.update({
        where: {
            id: id,
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
        },
    });
};
exports.updateRoom = updateRoom;
function deleteRoom(id) {
    return prisma.rooms.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteRoom = deleteRoom;
