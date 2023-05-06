"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth_services_1 = require("../../auth/auth.services");
const auth = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error('Session expired');
        }
        const [_, token] = authorization.split(' ');
        if (!token) {
            throw new Error('Session expired');
        }
        const { id } = (0, auth_services_1.verifyToken)(token);
        req.user = id;
        next();
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
exports.auth = auth;
