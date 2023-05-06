"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./config/express"));
const routes_1 = __importDefault(require("./routes"));
const formData_1 = require("./api/middlewares/formData");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
//CONFIG
(0, express_2.default)(app);
// SETUP CONFIG
(0, routes_1.default)(app);
app.post('/test-formdata', formData_1.formData, (req, res) => {
    res.status(200).json(Object.assign({}, req.body));
});
app.listen(port, () => {
    console.log(`Server listening on port ${port} !!!`);
});
