"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTags = exports.updateTags = exports.createTags = exports.getTagById = exports.getAllTags = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllTags = () => {
    return prisma.tags.findMany({
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getAllTags = getAllTags;
const getTagById = (id) => {
    return prisma.tags.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            Name: true
        }
    });
};
exports.getTagById = getTagById;
const createTags = (input) => {
    return prisma.tags.create({
        data: {
            Name: input.Name,
        }
    });
};
exports.createTags = createTags;
const updateTags = (id, input) => {
    return prisma.tags.update({
        where: {
            id: id,
        },
        data: {
            Name: input.Name,
        }
    });
};
exports.updateTags = updateTags;
function deleteTags(id) {
    return prisma.tags.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteTags = deleteTags;
