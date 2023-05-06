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
exports.deleteTagsController = exports.updateTagsController = exports.createTagsController = exports.getTagByIdController = exports.getAllTagsController = void 0;
const tags_services_1 = require("./tags.services");
const getAllTagsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield (0, tags_services_1.getAllTags)();
        res.status(200).json({ message: 'Tags found', data: tags });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllTagsController = getAllTagsController;
const getTagByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tag = yield (0, tags_services_1.getTagById)(Number(id));
        if (!tag) {
            return res.status(404).json({ message: 'Tag not found' });
        }
        res.status(201).json({ message: 'Tag found', data: tag });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTagByIdController = getTagByIdController;
const createTagsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield (0, tags_services_1.createTags)(req.body);
        res.status(201).json({ message: 'Tags created', data: tags });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createTagsController = createTagsController;
const updateTagsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tags = yield (0, tags_services_1.updateTags)(Number(id), req.body);
        if (!tags) {
            return res.status(404).json({ message: 'Tags not found' });
        }
        res.status(201).json({ message: 'Tags updated', data: tags });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateTagsController = updateTagsController;
const deleteTagsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tags = yield (0, tags_services_1.deleteTags)(Number(id));
        res.json(tags);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTagsController = deleteTagsController;
