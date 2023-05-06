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
exports.deleteHotelsController = exports.updateHotelsController = exports.createHotelController = exports.getHotelByIdController = exports.getAllHotelsController = void 0;
const hotels_services_1 = require("./hotels.services");
const getAllHotelsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Hotels = yield (0, hotels_services_1.getAllHotels)();
        res.status(200).json({ message: 'Hotels Found', data: Hotels });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show Hotels" });
    }
});
exports.getAllHotelsController = getAllHotelsController;
const getHotelByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const hotel = yield (0, hotels_services_1.getHotelById)(id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found ' });
        }
        res.status(201).json({ message: 'Hotel Found', data: hotel });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show a Hotel" });
    }
});
exports.getHotelByIdController = getHotelByIdController;
const createHotelController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Hotel = yield (0, hotels_services_1.createHotel)(req.body);
        res.status(201).json({ message: 'Hotel Created', data: Hotel });
    }
    catch (error) {
        res.status(505).json({ message: "It's not possible create a Hotel" });
    }
});
exports.createHotelController = createHotelController;
const updateHotelsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Hotel = yield (0, hotels_services_1.updateHotels)(id, req.body);
        if (!Hotel) {
            return res.status(404).json({ message: 'Hotel not exist' });
        }
        res.status(201).json({ message: 'Hotel Updated', data: Hotel });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible update a Hotel" });
    }
});
exports.updateHotelsController = updateHotelsController;
const deleteHotelsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Hotels = yield (0, hotels_services_1.deleteHotels)(id);
        res.json(Hotels);
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible delete a Hotel" });
    }
});
exports.deleteHotelsController = deleteHotelsController;
