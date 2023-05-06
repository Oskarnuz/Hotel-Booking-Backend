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
exports.deletePaymentsController = exports.updatePaymentsController = exports.createPaymentController = exports.getAllPaymentsController = void 0;
const payments_services_1 = require("./payments.services");
const getAllPaymentsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Payments = yield (0, payments_services_1.getAllPayments)();
        res.status(200).json({ message: 'Payment Found', data: Payments });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllPaymentsController = getAllPaymentsController;
const createPaymentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Payment = yield (0, payments_services_1.createPayment)(req.body);
        res.status(201).json({ message: 'Payment Created', data: Payment });
    }
    catch (error) {
        res.status(505).json({ message: error.message });
    }
});
exports.createPaymentController = createPaymentController;
const updatePaymentsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Payment = yield (0, payments_services_1.updatePayment)(id, req.body);
        if (!Payment) {
            return res.status(404).json({ message: 'Payment not exist' });
        }
        res.status(201).json({ message: 'Payment Updated', data: Payment });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updatePaymentsController = updatePaymentsController;
const deletePaymentsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Payments = yield (0, payments_services_1.deletePayments)(id);
        res.json(Payments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deletePaymentsController = deletePaymentsController;
