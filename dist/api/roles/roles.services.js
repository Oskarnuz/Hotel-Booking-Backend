"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoles = exports.updateRoles = exports.createRoles = exports.getRolesById = exports.getAllRoles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllRoles = () => {
    return prisma.roles.findMany({
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getAllRoles = getAllRoles;
const getRolesById = (id) => {
    return prisma.roles.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            Name: true,
        }
    });
};
exports.getRolesById = getRolesById;
const createRoles = (input) => {
    return prisma.roles.create({
        data: {
            Name: input.Name,
        }
    });
};
exports.createRoles = createRoles;
const updateRoles = (id, input) => {
    return prisma.roles.update({
        where: {
            id: id,
        },
        data: {
            Name: input.Name
        }
    });
};
exports.updateRoles = updateRoles;
function deleteRoles(id) {
    return prisma.roles.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteRoles = deleteRoles;
