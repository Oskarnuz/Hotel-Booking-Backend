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
exports.deletePoliciesController = exports.updatePoliciesController = exports.createPoliciesController = exports.getAllPoliciesController = void 0;
const policies_services_1 = require("./policies.services");
const getAllPoliciesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Policies = yield (0, policies_services_1.getAllPolicies)();
        res.status(200).json({ message: 'Policies found', data: Policies });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllPoliciesController = getAllPoliciesController;
const createPoliciesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Policies = yield (0, policies_services_1.createPolicies)(req.body);
        res.status(201).json({ message: 'Policies created', data: Policies });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createPoliciesController = createPoliciesController;
const updatePoliciesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Policies = yield (0, policies_services_1.updatePolicies)(Number(id), req.body);
        if (!Policies) {
            return res.status(404).json({ message: 'Policies not found' });
        }
        res.status(201).json({ message: 'Policies updated', data: Policies });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updatePoliciesController = updatePoliciesController;
const deletePoliciesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Policies = yield (0, policies_services_1.deletePolicies)(Number(id));
        res.json(Policies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deletePoliciesController = deletePoliciesController;
