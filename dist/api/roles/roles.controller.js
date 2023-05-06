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
exports.deleteRolesController = exports.updateRolesController = exports.createRolesController = exports.getRolesByIdController = exports.getAllRolesController = void 0;
const roles_services_1 = require("./roles.services");
const getAllRolesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, roles_services_1.getAllRoles)();
        res.status(200).json({ message: 'Roles found', data: roles });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllRolesController = getAllRolesController;
const getRolesByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield (0, roles_services_1.getRolesById)(Number(id));
        if (!role) {
            return res.status(404).json({ message: 'Amenity not found ' });
        }
        res.status(201).json({ message: 'Role Found', data: role });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getRolesByIdController = getRolesByIdController;
const createRolesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, roles_services_1.createRoles)(req.body);
        res.status(201).json({ message: 'Roles created', data: roles });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createRolesController = createRolesController;
const updateRolesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const roles = yield (0, roles_services_1.updateRoles)(Number(id), req.body);
        if (!roles) {
            return res.status(404).json({ message: 'Roles not found' });
        }
        res.status(201).json({ message: 'Roles updated', data: roles });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateRolesController = updateRolesController;
const deleteRolesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Roles = yield (0, roles_services_1.deleteRoles)(Number(id));
        res.json(Roles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteRolesController = deleteRolesController;
