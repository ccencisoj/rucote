import { createFile } from "./createFile";
import { deleteFile } from "./deleteFile";
import { toSpacedValue } from "./toSpacedValue";
import { executeCommand } from "./executeCommand";
import { TempStorage } from "./packages/temp-storage";
import { toCamelCaseValue } from "./toCamelCaseValue";
import { toLowerCaseValue } from "./toLowerCaseValue";
import { toCapitalizedValue } from "./toCapitalizedValue";

const command = toLowerCaseValue(process.argv[2] || "");
const value = toCamelCaseValue(process.argv[3] || "");
const spacedValue = toSpacedValue(value);
const camelCaseValue = toCamelCaseValue(value);
const capitalizedValue = toCapitalizedValue(value);

const tempStorage = new TempStorage();
const commandKey = `${command} ${camelCaseValue}`;
const commandAlreadyExecuted = tempStorage.getItem(commandKey) === "executed";

tempStorage.setItem(commandKey, "executed");

export {
  command,
  value,
  spacedValue,
  camelCaseValue,
  capitalizedValue,
  createFile,
  deleteFile,
  executeCommand,
  commandAlreadyExecuted
}
