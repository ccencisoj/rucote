"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCapitalizedValue = void 0;
const lodash_1 = __importDefault(require("lodash"));
const toCapitalizedValue = (value) => {
    return lodash_1.default.startCase(lodash_1.default.camelCase(value)).replace(" ", "");
};
exports.toCapitalizedValue = toCapitalizedValue;
