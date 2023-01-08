import fs from "fs-extra";
import { compareStrings } from "./compareStrings";

export const existsFile = (filePath: string, content?: string)=> {
  const existsFilePath = fs.existsSync(filePath);

  if(!existsFilePath || !content) return existsFilePath;

  const fileContent = fs.readFileSync(filePath).toString();

  return compareStrings(content, fileContent);
}
