"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payments_controller_1 = require("./payments.controller");
const router = (0, express_1.Router)();
router.get("/", payments_controller_1.getAllPaymentsController);
router.post("/", payments_controller_1.createPaymentController);
router.put("/:id", payments_controller_1.updatePaymentsController);
router.delete("/:id", payments_controller_1.deletePaymentsController);
exports.default = router;
