import { execSync } from "child_process";

export const executeCommand = (command: string): void => {
  execSync(command);
}
