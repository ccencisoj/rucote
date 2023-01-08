import { deleteExtraLines } from "./deleteExtralines";
import { deleteExtraIndents } from "./deleteExtraindents";

export const cleanContent = (content: string): string => {
  content = deleteExtraLines(content);
  content = deleteExtraIndents(content);
  return content;
}
