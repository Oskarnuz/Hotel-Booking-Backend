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
exports.deleteInclusionsController = exports.updateInclusionsController = exports.createInclusionsController = exports.getInclusionByIdController = exports.getAllInclusionsController = void 0;
const inclusions_services_1 = require("./inclusions.services");
const getAllInclusionsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inclusions = yield (0, inclusions_services_1.getAllInclusions)();
        res.status(200).json({ message: 'Inclusions found', data: inclusions });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllInclusionsController = getAllInclusionsController;
const getInclusionByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inclusion = yield (0, inclusions_services_1.getInclusionById)(Number(id));
        if (!inclusion) {
            return res.status(404).json({ message: 'Inclusion not found ' });
        }
        res.status(201).json({ message: 'Inclusion Found', data: inclusion });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getInclusionByIdController = getInclusionByIdController;
const createInclusionsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inclusions = yield (0, inclusions_services_1.createInclusions)(req.body);
        res.status(201).json({ message: 'Inclusions created', data: inclusions });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createInclusionsController = createInclusionsController;
const updateInclusionsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inclusions = yield (0, inclusions_services_1.updateInclusions)(Number(id), req.body);
        if (!inclusions) {
            return res.status(404).json({ message: 'Inclusions not found' });
        }
        res.status(201).json({ message: 'Inclusions updated', data: inclusions });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateInclusionsController = updateInclusionsController;
const deleteInclusionsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inclusions = yield (0, inclusions_services_1.deleteInclusions)(Number(id));
        res.json(inclusions);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteInclusionsController = deleteInclusionsController;
