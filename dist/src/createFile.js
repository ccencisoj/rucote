"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const cleanContent_1 = require("./cleanContent");
const createFile = (filePath, content) => {
    fs_extra_1.default.removeSync(filePath);
    fs_extra_1.default.mkdirpSync(path_1.default.dirname(filePath));
    fs_extra_1.default.writeFileSync(filePath, (0, cleanContent_1.cleanContent)(content));
};
exports.createFile = createFile;
