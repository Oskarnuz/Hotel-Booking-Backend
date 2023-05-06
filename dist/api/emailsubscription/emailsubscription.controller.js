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
exports.deleteEmailSubscriptionController = exports.createEmailSubscriptionController = exports.getAllEmailSubscriptionController = void 0;
const emailsubscription_services_1 = require("./emailsubscription.services");
const nodemailer_1 = require("../../config/nodemailer");
const newsletterEmail_1 = require("../../utils/newsletterEmail");
const getAllEmailSubscriptionController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const EmailSubscription = yield (0, emailsubscription_services_1.getAllEmailSubscription)();
        res.status(200).json({ message: 'EmailSubscription found', data: EmailSubscription });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllEmailSubscriptionController = getAllEmailSubscriptionController;
const createEmailSubscriptionController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const EmailSubscription = yield (0, emailsubscription_services_1.createEmailSubscription)(req.body);
        yield (0, nodemailer_1.sendNodeMailer)((0, newsletterEmail_1.newsletterEmail)(req.body.Email));
        res.status(201).json({ message: 'EmailSubscription created', data: EmailSubscription });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createEmailSubscriptionController = createEmailSubscriptionController;
const deleteEmailSubscriptionController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const EmailSubscription = yield (0, emailsubscription_services_1.deleteEmailSubscription)(Number(id));
        res.json(EmailSubscription);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteEmailSubscriptionController = deleteEmailSubscriptionController;
