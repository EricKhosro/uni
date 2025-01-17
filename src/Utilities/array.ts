import { DropdownItem } from "Interfaces/componentsInterface";

export const sortDropdownOptionsByPerisanAlphabet = <T extends DropdownItem>(
  options: T[]
): T[] =>
  options.sort(function (a, b) {
    return a.name.localeCompare(b.name, "fa");
  });

export const removeDropdownOptionsDuplicatedValues = <T extends DropdownItem>(
  options: T[]
): T[] => {
  const res: T[] = [];
  options.forEach((o) => {
    const optionFind = res.find((r) => r.name === o.name) || null;
    if (!optionFind) res.push(o);
  });

  return res;
};

export const getIndex = (i?: number) => {
  if (typeof i === "undefined") return -1;
  return i;
};
