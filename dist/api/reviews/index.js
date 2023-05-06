"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_controller_1 = require("./reviews.controller");
const router = (0, express_1.Router)();
// GET /api/reviews
router.get("/", reviews_controller_1.getAllReviewsController);
// GET /api/reviews/:id
router.get("/:id", reviews_controller_1.getReviewByIdController);
// POST /api/reviews
router.post("/", reviews_controller_1.createReviewController);
// PATCH /api/reviews/:id
router.patch("/:id", reviews_controller_1.updateReviewController);
// DELETE /api/reviews/:id
router.delete("/:id", reviews_controller_1.deleteReviewController);
exports.default = router;
