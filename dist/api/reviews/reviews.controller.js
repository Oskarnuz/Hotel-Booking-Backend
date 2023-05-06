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
exports.deleteReviewController = exports.updateReviewController = exports.createReviewController = exports.getReviewByIdController = exports.getAllReviewsController = void 0;
const reviews_services_1 = require("./reviews.services");
const getAllReviewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield (0, reviews_services_1.getAllReviews)();
        res.status(200).json({ message: 'Reviews found', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllReviewsController = getAllReviewsController;
const getReviewByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, reviews_services_1.getReviewById)(Number(id));
        res.status(200).json({ message: 'Review found', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getReviewByIdController = getReviewByIdController;
const createReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield (0, reviews_services_1.createReview)(req.body);
        res.status(201).json({ message: 'Review created', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createReviewController = createReviewController;
const updateReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, reviews_services_1.updateReview)(Number(id), req.body);
        res.status(200).json({ message: 'Review updated', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateReviewController = updateReviewController;
const deleteReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, reviews_services_1.deleteReview)(Number(id));
        res.status(200).json({ message: 'Review deleted', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteReviewController = deleteReviewController;
