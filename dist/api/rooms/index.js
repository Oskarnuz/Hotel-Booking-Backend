"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rooms_controller_1 = require("./rooms.controller");
const router = (0, express_1.Router)();
router.get("/", rooms_controller_1.getAllRoomsController);
router.get("/:id", rooms_controller_1.getRoomByIdController);
router.post("/", rooms_controller_1.createRoomController);
router.put("/:id", rooms_controller_1.updateRoomController);
router.delete("/:id", rooms_controller_1.deleteRoomController);
exports.default = router;
