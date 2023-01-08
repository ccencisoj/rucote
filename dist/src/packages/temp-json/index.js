"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTempJSON = exports.getTempJSON = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const currentPath = path_1.default.resolve(".");
const tempJSONFilename = jsonwebtoken_1.default.sign(currentPath, "temp-json").split(".")[1] + ".json";
const tempJSONPath = path_1.default.join(os_1.default.tmpdir(), tempJSONFilename);
try {
    fs_extra_1.default.readJSONSync(tempJSONPath);
}
catch (error) {
    fs_extra_1.default.mkdirpSync(path_1.default.dirname(tempJSONPath));
    fs_extra_1.default.removeSync(tempJSONPath);
    fs_extra_1.default.writeJSONSync(tempJSONPath, {});
}
const getTempJSON = () => {
    return fs_extra_1.default.readJSONSync(tempJSONPath);
};
exports.getTempJSON = getTempJSON;
const setTempJSON = (tempJSON) => {
    fs_extra_1.default.writeJSONSync(tempJSONPath, tempJSON);
};
exports.setTempJSON = setTempJSON;
