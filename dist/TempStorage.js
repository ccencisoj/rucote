"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempStorage = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const tempStorageJSONFilename = bcrypt_1.default.hashSync(path_1.default.resolve("."), 8);
const tempStorageJSONPath = path_1.default.join(os_1.default.tmpdir(), tempStorageJSONFilename + "-rucote.json");
console.log("temp: ", tempStorageJSONPath);
console.log(os_1.default.tmpdir());
console.log(path_1.default.resolve("."));
if (!fs_extra_1.default.existsSync(tempStorageJSONPath)) {
    fs_extra_1.default.writeJSONSync(tempStorageJSONPath, {});
}
class TempStorage {
    constructor() {
        this.getItem = (key) => {
            const tempStorageJSON = fs_extra_1.default.readJSONSync(tempStorageJSONPath);
            const value = tempStorageJSON[key];
            return value;
        };
        this.setItem = (key, value) => {
            const tempStorageJSON = fs_extra_1.default.readJSONSync(tempStorageJSONPath);
            tempStorageJSON[key] = value;
            fs_extra_1.default.writeJSONSync(tempStorageJSONPath, tempStorageJSON);
        };
    }
}
exports.TempStorage = TempStorage;
