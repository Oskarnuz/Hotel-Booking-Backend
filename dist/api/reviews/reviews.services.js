"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllReviews = () => {
    return prisma.reviews.findMany({
        select: {
            id: true,
            rating: true,
            user: true,
            date: true,
            hotelReview: true
        }
    });
};
exports.getAllReviews = getAllReviews;
const getReviewById = (id) => {
    return prisma.reviews.findUnique({
        where: {
            id: id,
        },
    });
};
exports.getReviewById = getReviewById;
const createReview = (input) => {
    return prisma.reviews.create({
        data: {
            rating: Math.floor(input.rating),
            user: input.user,
            date: input.date,
            hotelReview: input.hotelReview,
        }
    });
};
exports.createReview = createReview;
const updateReview = (id, input) => {
    return prisma.reviews.update({
        where: {
            id: id,
        },
        data: {
            rating: input.rating,
            user: input.user,
            date: input.date,
            hotelReview: input.hotelReview
        },
    });
};
exports.updateReview = updateReview;
const deleteReview = (id) => {
    return prisma.reviews.delete({
        where: {
            id: id,
        },
    });
};
exports.deleteReview = deleteReview;
