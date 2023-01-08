import lodash from "lodash";

export const toCapitalizedValue = (value: string)=> {
  return lodash.startCase(lodash.camelCase(value)).replace(" ", "");
}
