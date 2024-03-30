import { ElementData } from "@molecule/Element/Element.types";

export const FilterByActiveProgress = (
  list: Array<ElementData>
): Array<ElementData> => {
  return list.filter((el) => el.progress.filter((elP) => !elP.done).length > 0);
};