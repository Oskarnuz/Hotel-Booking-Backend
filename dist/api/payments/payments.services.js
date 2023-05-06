"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePayments = exports.updatePayment = exports.getPaymentById = exports.createPayment = exports.getAllPayments = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPayments = () => {
    return prisma.payments.findMany({
        select: {
            CardFirstName: true,
            CardSecondName: true,
            CardBankEntity: true,
            CardNumber: true,
            CardType: true,
            FinalPrice: true,
            Tax: true,
            BasePrice: true,
            PromoCode: true,
            Status: true
        }
    });
};
exports.getAllPayments = getAllPayments;
const createPayment = (input) => {
    return prisma.payments.create({
        data: {
            CardFirstName: input.CardFirstName,
            CardSecondName: input.CardSecondName,
            CardBankEntity: input.CardBankEntity,
            CardNumber: input.CardNumber,
            CardType: input.CardType,
            FinalPrice: input.FinalPrice,
            Tax: input.Tax,
            BasePrice: input.BasePrice,
            PromoCode: input.PromoCode,
            Status: input.Status,
            bookings: {
                connect: {
                    id: input.bookingsId
                }
            }
        }
    });
};
exports.createPayment = createPayment;
const getPaymentById = (id) => {
    return prisma.payments.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            CardFirstName: true,
            CardSecondName: true,
            CardBankEntity: true,
            CardNumber: true,
            CardType: true,
            FinalPrice: true,
            Tax: true,
            BasePrice: true,
            PromoCode: true,
            Status: true,
            createdAt: true,
            updatedAt: true,
        }
    });
};
exports.getPaymentById = getPaymentById;
const updatePayment = (id, input) => {
    return prisma.payments.update({
        where: {
            id: id,
        },
        data: {
            CardFirstName: input.CardFirstName,
            CardSecondName: input.CardSecondName,
            CardBankEntity: input.CardBankEntity,
            CardNumber: input.CardNumber,
            CardType: input.CardType,
            FinalPrice: input.FinalPrice,
            Tax: input.Tax,
            BasePrice: input.BasePrice,
            PromoCode: input.PromoCode,
            Status: input.Status
        }
    });
};
exports.updatePayment = updatePayment;
function deletePayments(id) {
    return prisma.payments.delete({
        where: {
            id: id,
        },
    });
}
exports.deletePayments = deletePayments;
