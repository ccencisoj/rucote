import lodash from "lodash";

export const toCamelCaseValue = (value: string)=> {
  return lodash.camelCase(value);
}
