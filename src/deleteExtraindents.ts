// @ts-nocheck
import { Linter } from "eslint";
import * as typescriptParser from "@typescript-eslint/parser";

const linter = new Linter();

linter.defineParser("typescript", typescriptParser);

export const deleteExtraIndents = (content: string): string => {
  const rules = {"indent": ["error", "tab"]};
  const options = {parser: 'typescript', rules};
  
  content = linter.verifyAndFix(content, options).output;

  return content;
}
