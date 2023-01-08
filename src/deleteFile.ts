import fs from "fs-extra";

export const deleteFile = (filePath: string)=> {
  fs.removeSync(filePath);
}
