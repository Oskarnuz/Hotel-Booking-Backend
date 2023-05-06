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
exports.deleteAmenitiesController = exports.updateAmenitiesController = exports.createAmenitiesController = exports.getAmenitiesByIdController = exports.getAllAmenitiesController = void 0;
const amenities_services_1 = require("./amenities.services");
const getAllAmenitiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Amenities = yield (0, amenities_services_1.getAllAmenities)();
        res.status(200).json({ message: 'Amenities found', data: Amenities });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllAmenitiesController = getAllAmenitiesController;
const getAmenitiesByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const amenity = yield (0, amenities_services_1.getAmenitiesById)(Number(id));
        if (!amenity) {
            return res.status(404).json({ message: 'Amenity not found ' });
        }
        res.status(201).json({ message: 'Amenity Found', data: amenity });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAmenitiesByIdController = getAmenitiesByIdController;
const createAmenitiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Amenities = yield (0, amenities_services_1.createAmenities)(req.body);
        res.status(201).json({ message: 'Amenities created', data: Amenities });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createAmenitiesController = createAmenitiesController;
const updateAmenitiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Amenities = yield (0, amenities_services_1.updateAmenities)(Number(id), req.body);
        if (!Amenities) {
            return res.status(404).json({ message: 'Amenities not found' });
        }
        res.status(201).json({ message: 'Amenities updated', data: Amenities });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateAmenitiesController = updateAmenitiesController;
const deleteAmenitiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Amenities = yield (0, amenities_services_1.deleteAmenities)(Number(id));
        res.json(Amenities);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteAmenitiesController = deleteAmenitiesController;
