import lodash from "lodash";

export const toSpacedValue = (value: string)=> {
  return lodash.capitalize(lodash.startCase(value).toLocaleLowerCase());
}
