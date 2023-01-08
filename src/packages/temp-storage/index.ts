import { getTempJSON, setTempJSON } from "../temp-json";

export class TempStorage {  
  public getItem = (key: string): string => {
    return getTempJSON()[key] || "";
  }

  public setItem = (key: string, value: string): void=> {
    setTempJSON({...getTempJSON()[key], [key]: value});
  }
}
