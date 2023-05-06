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
exports.deleteRoomController = exports.updateRoomController = exports.getRoomByIdController = exports.createRoomController = exports.getAllRoomsController = void 0;
const rooms_services_1 = require("./rooms.services");
const getAllRoomsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, rooms_services_1.getAllRooms)();
        res.status(200).json({ message: 'Rooms found', data: rooms });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show Rooms" });
    }
});
exports.getAllRoomsController = getAllRoomsController;
const createRoomController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, rooms_services_1.createRoom)(req.body);
        res.status(201).json({ message: 'Room created', data: room });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to create a Room" });
    }
});
exports.createRoomController = createRoomController;
const getRoomByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const room = yield (0, rooms_services_1.getRoomById)(id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(201).json({ message: 'Room found', data: room });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show a Room" });
    }
});
exports.getRoomByIdController = getRoomByIdController;
const updateRoomController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const room = yield (0, rooms_services_1.updateRoom)(id, req.body);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(201).json({ message: 'Room updated', data: room });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible update a Room" });
    }
});
exports.updateRoomController = updateRoomController;
const deleteRoomController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const room = yield (0, rooms_services_1.deleteRoom)(id);
        res.json(room);
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible delete a Room" });
    }
});
exports.deleteRoomController = deleteRoomController;
