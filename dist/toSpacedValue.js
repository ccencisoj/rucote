"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSpacedValue = void 0;
const lodash_1 = __importDefault(require("lodash"));
const toSpacedValue = (value) => {
    return lodash_1.default.capitalize(lodash_1.default.startCase(value).toLocaleLowerCase());
};
exports.toSpacedValue = toSpacedValue;
