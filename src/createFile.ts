import path from "path";
import fs from "fs-extra";
import { cleanContent } from "./cleanContent";

export const createFile = (filePath: string, content: string)=> {
  fs.removeSync(filePath);
  fs.mkdirpSync(path.dirname(filePath));
  fs.writeFileSync(filePath, cleanContent(content));
}
