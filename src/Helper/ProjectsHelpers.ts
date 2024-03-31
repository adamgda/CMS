import { ElementData } from "@molecule/Element/Element.types";

export const FilterByActiveProgress = (
  list: Array<ElementData>
): Array<ElementData> => {
  return list.filter(
    (el) =>
      el.progress &&
      el.progress.length > 0 &&
      el.progress.filter((elP) => elP && elP.done).length > 0
  );
};
