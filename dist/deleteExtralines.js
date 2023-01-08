"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExtraLines = void 0;
const deleteExtraLines = (content) => {
    const contentLines = content.split("\n");
    content = contentLines.filter((line, index) => {
        const lineWithoutSpaces = line.replace(/ /g, "");
        if (lineWithoutSpaces === "" && index === 0)
            return false;
        if (lineWithoutSpaces === "" && index === (contentLines.length - 1))
            return false;
        return true;
    }).join("\n");
    return content;
};
exports.deleteExtraLines = deleteExtraLines;
