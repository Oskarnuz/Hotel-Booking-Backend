"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingController = exports.updateBookingController = exports.createBookingController = exports.getBookingByIdController = exports.getAllBookingsController = void 0;
const bookings_services_1 = require("./bookings.services");
const auth_services_1 = require("../../auth/auth.services");
const nodemailer_1 = require("../../config/nodemailer");
const bookingEmail_1 = require("../../utils/bookingEmail");
const users_services_1 = require("../users/users.services");
const getAllBookingsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield (0, bookings_services_1.getAllBookings)();
        res.status(200).json({ message: "Booking Found", data: booking });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllBookingsController = getAllBookingsController;
const getBookingByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield (0, bookings_services_1.getBookingById)(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found " });
        }
        res.status(201).json({ message: "Booking Found", data: booking });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getBookingByIdController = getBookingByIdController;
const createBookingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("You need to be authorized to access this information");
        }
        const [_, token] = authorization.split(" ");
        if (!token) {
            throw new Error("Invalid Token!");
        }
        const { id } = (0, auth_services_1.verifyToken)(token);
        const booking = yield (0, bookings_services_1.createBooking)(req.body, id);
        const user = yield (0, users_services_1.getUserById)(id);
        yield (0, nodemailer_1.sendNodeMailer)((0, bookingEmail_1.bookingEmail)(booking, user));
        res.status(201).json({ message: "Booking Created", data: booking });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createBookingController = createBookingController;
const updateBookingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield (0, bookings_services_1.updateBooking)(id, req.body);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(201).json({ message: "Booking updated", data: booking });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateBookingController = updateBookingController;
const deleteBookingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield (0, bookings_services_1.deleteBooking)(id);
        res.json(booking);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteBookingController = deleteBookingController;
