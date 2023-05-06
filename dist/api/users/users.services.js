"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.recoverPassword = exports.updateUserPicture = exports.updateUserRole = exports.updateUserPassword = exports.updateUser = exports.getUserById = exports.createUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// CRUD
const getAllUsers = () => {
    return prisma.users.findMany({
        select: {
            id: true,
            fullName: true,
            gender: true,
            streetAddress: true,
            city: true,
            state: true,
            zipCode: true,
            email: true,
            phoneNumber: true,
            password: true,
            bookings: true,
            role: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};
exports.getAllUsers = getAllUsers;
// Create
const createUser = (input) => {
    const roleId = 1;
    return prisma.users.create({
        data: {
            fullName: input.fullName,
            gender: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            email: input.email,
            phoneNumber: "",
            password: input.password,
            bookings: input.bookings,
            role: {
                connect: { id: roleId },
            },
            picture: "",
        },
    });
};
exports.createUser = createUser;
const getUserById = (id) => {
    return prisma.users.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            fullName: true,
            gender: true,
            streetAddress: true,
            city: true,
            state: true,
            zipCode: true,
            email: true,
            phoneNumber: true,
            password: true,
            bookings: {
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
                },
            },
            role: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};
exports.getUserById = getUserById;
const updateUser = (id, input) => {
    return prisma.users.update({
        where: {
            id: id,
        },
        data: {
            fullName: input.fullName,
            gender: input.gender,
            streetAddress: input.streetAddress,
            city: input.city,
            state: input.state,
            zipCode: input.zipCode,
            phoneNumber: input.phoneNumber,
            bookings: input.bookings,
        },
    });
};
exports.updateUser = updateUser;
const updateUserPassword = (id, input) => {
    return prisma.users.update({
        where: {
            id: id,
        },
        data: {
            password: input.password,
        },
    });
};
exports.updateUserPassword = updateUserPassword;
const updateUserRole = (id, input) => {
    return prisma.users.update({
        where: {
            id: id,
        },
        data: {
            roleId: input.newRrole,
            role: {
                connect: { id: input.newRole },
            },
        },
    });
};
exports.updateUserRole = updateUserRole;
const updateUserPicture = (id, input) => {
    return prisma.users.update({
        where: {
            id: id,
        },
        data: {
            picture: input.picture,
        },
    });
};
exports.updateUserPicture = updateUserPicture;
const recoverPassword = (email) => {
    return prisma.users.findUnique({
        where: {
            email: email,
        },
        select: {
            id: true,
            password: true,
        },
    });
};
exports.recoverPassword = recoverPassword;
const deleteUser = (id) => {
    return prisma.users.delete({
        where: {
            id,
        },
    });
};
exports.deleteUser = deleteUser;
