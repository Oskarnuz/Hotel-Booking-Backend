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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverPasswordController = exports.deleteUserController = exports.updateUserPictureController = exports.updateUserRoleController = exports.updateUserPasswordController = exports.updateUserController = exports.getUserByIdController = exports.createUserController = exports.getAllUsersController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_services_1 = require("./users.services");
const nodemailer_1 = require("../../config/nodemailer");
const recoverEmail_1 = require("../../utils/recoverEmail");
const getAllUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_services_1.getAllUsers)();
        res.status(200).json({ message: "Users found", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show Users" });
    }
});
exports.getAllUsersController = getAllUsersController;
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_services_1.createUser)(req.body);
        res.status(201).json({ message: "User created", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible create a User" });
    }
});
exports.createUserController = createUserController;
const getUserByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, users_services_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(201).json({ message: "User found", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show a User" });
    }
});
exports.getUserByIdController = getUserByIdController;
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user ? req.user : "";
        const user = yield (0, users_services_1.getUserById)(id);
        const UserUpdated = yield (0, users_services_1.updateUser)(id, Object.assign(Object.assign({}, req.body), { password: user === null || user === void 0 ? void 0 : user.password }));
        res.status(200).json({ message: "User updated", data: UserUpdated });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible update a User" });
    }
});
exports.updateUserController = updateUserController;
const updateUserPasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user ? req.user : "";
        const newPassword = req.body.password;
        const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
        const UserUpdated = yield (0, users_services_1.updateUserPassword)(id, {
            password: hashedPassword,
        });
        res
            .status(200)
            .json({ message: "User password updated", data: UserUpdated });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "It's not possible update User's password" });
    }
});
exports.updateUserPasswordController = updateUserPasswordController;
const updateUserRoleController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.userId;
        const UserUpdated = yield (0, users_services_1.updateUserRole)(id, Object.assign({}, req.body));
        res.status(200).json({ message: "User role updated", data: UserUpdated });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible update User's role" });
    }
});
exports.updateUserRoleController = updateUserRoleController;
const updateUserPictureController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user ? req.user : "";
        const UserUpdated = yield (0, users_services_1.updateUserPicture)(id, Object.assign({}, req.body));
        res
            .status(200)
            .json({ message: "User picture updated", data: UserUpdated });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "It's not possible update User's picture" });
    }
});
exports.updateUserPictureController = updateUserPictureController;
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, users_services_1.deleteUser)(id);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible delete a User" });
    }
});
exports.deleteUserController = deleteUserController;
const recoverPasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        let password = "";
        password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        for (let i = 0; i < 6; i++) {
            const randomChar = Math.floor(Math.random() * 3);
            password += [lowercaseLetters, uppercaseLetters, numbers][randomChar].charAt(Math.floor(Math.random() *
                [lowercaseLetters, uppercaseLetters, numbers][randomChar].length));
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield (0, users_services_1.recoverPassword)(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const UserUpdated = yield (0, users_services_1.updateUserPassword)(user.id, {
            password: hashedPassword,
        });
        yield (0, nodemailer_1.sendNodeMailer)((0, recoverEmail_1.recoverEmail)(password, UserUpdated));
        res.status(201).json({ message: "Password Recovered", data: password });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to show a User" });
    }
});
exports.recoverPasswordController = recoverPasswordController;
