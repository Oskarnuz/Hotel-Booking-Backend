"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePolicies = exports.updatePolicies = exports.createPolicies = exports.getAllPolicies = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPolicies = () => {
    return prisma.policies.findMany({
        select: {
            id: true,
            Name: true
        }
    });
};
exports.getAllPolicies = getAllPolicies;
const createPolicies = (input) => {
    return prisma.policies.create({
        data: {
            Name: input.Name
        }
    });
};
exports.createPolicies = createPolicies;
const updatePolicies = (id, input) => {
    return prisma.policies.update({
        where: {
            id: id,
        },
        data: {
            Name: input.Name
        }
    });
};
exports.updatePolicies = updatePolicies;
function deletePolicies(id) {
    return prisma.policies.delete({
        where: {
            id: id,
        },
    });
}
exports.deletePolicies = deletePolicies;
