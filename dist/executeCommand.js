"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = void 0;
const child_process_1 = require("child_process");
const executeCommand = (command) => {
    (0, child_process_1.execSync)(command);
};
exports.executeCommand = executeCommand;
