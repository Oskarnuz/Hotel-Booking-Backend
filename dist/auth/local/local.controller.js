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
exports.loginController = exports.signupController = void 0;
const users_services_1 = require("../../api/users/users.services");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_services_1 = require("../auth.services");
const auth_services_2 = require("../auth.services");
const users_services_2 = require("../../api/users/users.services");
const welcomeEmail_1 = require("../../utils/welcomeEmail");
const nodemailer_1 = require("../../config/nodemailer");
const signupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email } = req.body;
        const encPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const user = yield (0, users_services_1.createUser)(Object.assign(Object.assign({}, req.body), { password: encPassword }));
        const token = (0, auth_services_2.signToken)({ id: user.id });
        yield (0, nodemailer_1.sendNodeMailer)((0, welcomeEmail_1.welcomeEmail)(user));
        res
            .status(201)
            .json({ message: "User Created", data: { fullName, email }, token });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to create a User" });
    }
});
exports.signupController = signupController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, auth_services_1.login)(email);
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            throw new Error("Invalid email or password");
        }
        const { id, fullName } = user;
        const newUser = yield (0, users_services_2.getUserById)(user.id);
        if (newUser === null) {
            throw new Error("Invalid email or password");
        }
        const role = newUser.role.Name;
        const token = (0, auth_services_2.signToken)({ id: user.id, role, fullName });
        res.status(201).json({
            message: "User login successfully",
            data: { email, fullName },
            token,
        });
    }
    catch (error) {
        res.status(500).json({ message: "It's not possible to login a User" });
    }
});
exports.loginController = loginController;
