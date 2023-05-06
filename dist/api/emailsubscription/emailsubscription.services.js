"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmailSubscription = exports.createEmailSubscription = exports.getAllEmailSubscription = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllEmailSubscription = () => {
    return prisma.emailSubcribers.findMany({
        select: {
            id: true,
            Email: true
        }
    });
};
exports.getAllEmailSubscription = getAllEmailSubscription;
const createEmailSubscription = (input) => {
    return prisma.emailSubcribers.create({
        data: {
            Email: input.Email
        }
    });
};
exports.createEmailSubscription = createEmailSubscription;
function deleteEmailSubscription(id) {
    return prisma.emailSubcribers.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteEmailSubscription = deleteEmailSubscription;
