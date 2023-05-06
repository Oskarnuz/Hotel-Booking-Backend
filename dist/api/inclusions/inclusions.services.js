"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInclusions = exports.updateInclusions = exports.createInclusions = exports.getInclusionById = exports.getAllInclusions = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllInclusions = () => {
    return prisma.inclusions.findMany({
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getAllInclusions = getAllInclusions;
const getInclusionById = (id) => {
    return prisma.inclusions.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getInclusionById = getInclusionById;
const createInclusions = (input) => {
    return prisma.inclusions.create({
        data: {
            Name: input.name,
        }
    });
};
exports.createInclusions = createInclusions;
const updateInclusions = (id, input) => {
    return prisma.inclusions.update({
        where: {
            id: id,
        },
        data: {
            Name: input.Name,
        }
    });
};
exports.updateInclusions = updateInclusions;
function deleteInclusions(id) {
    return prisma.inclusions.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteInclusions = deleteInclusions;
