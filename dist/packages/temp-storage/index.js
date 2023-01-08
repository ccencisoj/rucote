"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempStorage = void 0;
const temp_json_1 = require("../temp-json");
class TempStorage {
    constructor() {
        this.getItem = (key) => {
            return (0, temp_json_1.getTempJSON)()[key] || "";
        };
        this.setItem = (key, value) => {
            (0, temp_json_1.setTempJSON)(Object.assign(Object.assign({}, (0, temp_json_1.getTempJSON)()[key]), { [key]: value }));
        };
    }
}
exports.TempStorage = TempStorage;
