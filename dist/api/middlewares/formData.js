"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formData = void 0;
const busboy_1 = __importDefault(require("busboy"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const formData = (req, res, next) => {
    let uploadFile = false;
    let uploadCount = 0;
    const done = () => {
        if (uploadFile)
            return;
        if (uploadCount > 0)
            return;
        next();
    };
    const bb = (0, busboy_1.default)({ headers: req.headers });
    req.body = {};
    bb.on("field", (key, val) => {
        req.body[key] = val;
    });
    bb.on("file", (key, stream) => {
        uploadFile = true;
        uploadCount++;
        const cloud = cloudinary_1.v2.uploader.upload_stream({ upload_preset: "hotel-booking-preset" }, (err, res) => {
            if (err)
                throw new Error("Error in the uploading");
            req.body[key] = res === null || res === void 0 ? void 0 : res.secure_url;
            uploadFile = false;
            uploadCount--;
            done();
        });
        stream.on("data", (data) => {
            cloud.write(data);
        });
        stream.on("end", () => {
            cloud.end();
        });
    });
    bb.on("finish", () => {
        done();
    });
    req.pipe(bb);
};
exports.formData = formData;
