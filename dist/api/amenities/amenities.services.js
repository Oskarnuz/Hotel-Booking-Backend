"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAmenities = exports.updateAmenities = exports.createAmenities = exports.getAmenitiesById = exports.getAllAmenities = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllAmenities = () => {
    return prisma.amenities.findMany({
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getAllAmenities = getAllAmenities;
const getAmenitiesById = (id) => {
    return prisma.amenities.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getAmenitiesById = getAmenitiesById;
const createAmenities = (input) => {
    return prisma.amenities.create({
        data: {
            Name: input.Name,
        }
    });
};
exports.createAmenities = createAmenities;
const updateAmenities = (id, input) => {
    return prisma.amenities.update({
        where: {
            id: id,
        },
        data: {
            Name: input.Name
        }
    });
};
exports.updateAmenities = updateAmenities;
function deleteAmenities(id) {
    return prisma.amenities.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteAmenities = deleteAmenities;
