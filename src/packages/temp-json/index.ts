import os from "os";
import path from "path";
import fs from "fs-extra";
import JWT from "jsonwebtoken";

const currentPath = path.resolve(".");
const tempJSONFilename = JWT.sign(currentPath, "temp-json").split(".")[1] + ".json";
const tempJSONPath = path.join(os.tmpdir(), tempJSONFilename);

try {
  fs.readJSONSync(tempJSONPath);
}catch(error) {
  fs.mkdirpSync(path.dirname(tempJSONPath));
  fs.removeSync(tempJSONPath);
  fs.writeJSONSync(tempJSONPath, {});
}

export const getTempJSON = ()=> {
  return fs.readJSONSync(tempJSONPath);
}

export const setTempJSON = (tempJSON: string)=> {
  fs.writeJSONSync(tempJSONPath, tempJSON);
}
