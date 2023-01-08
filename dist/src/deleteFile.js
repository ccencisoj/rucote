"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const deleteFile = (filePath) => {
    fs_extra_1.default.removeSync(filePath);
};
exports.deleteFile = deleteFile;
