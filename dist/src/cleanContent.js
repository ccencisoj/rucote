"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanContent = void 0;
const deleteExtralines_1 = require("./deleteExtralines");
const deleteExtraindents_1 = require("./deleteExtraindents");
const cleanContent = (content) => {
    content = (0, deleteExtralines_1.deleteExtraLines)(content);
    content = (0, deleteExtraindents_1.deleteExtraIndents)(content);
    return content;
};
exports.cleanContent = cleanContent;
