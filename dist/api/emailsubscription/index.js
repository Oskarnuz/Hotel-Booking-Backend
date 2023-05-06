"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailsubscription_controller_1 = require("./emailsubscription.controller");
const router = (0, express_1.Router)();
router.get("/", emailsubscription_controller_1.getAllEmailSubscriptionController);
router.post("/", emailsubscription_controller_1.createEmailSubscriptionController);
router.delete("/:id", emailsubscription_controller_1.deleteEmailSubscriptionController);
exports.default = router;
