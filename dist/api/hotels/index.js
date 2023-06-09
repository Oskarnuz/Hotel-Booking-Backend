"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hotels_controller_1 = require("./hotels.controller");
const router = (0, express_1.Router)();
router.get("/", hotels_controller_1.getAllHotelsController);
router.post("/", hotels_controller_1.createHotelController);
router.put("/:id", hotels_controller_1.updateHotelsController);
router.delete("/:id", hotels_controller_1.deleteHotelsController);
router.get('/:id', hotels_controller_1.getHotelByIdController);
exports.default = router;
