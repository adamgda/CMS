import { ElementData } from "../Components/List/Element/Element.types";
import { GetUserData } from "../Services/AuthService";

export const FilterByUserGroup = (
  list: Array<ElementData>
): Array<ElementData> => {
  return GetUserData().is_admin
    ? list
    : list.filter((el) => el.group_id === GetUserData().group_id);
};

export const FilterByActiveProgress = (
  list: Array<ElementData>
): Array<ElementData> => {
  return list.filter((el) => el.progress.filter((elP) => !elP.done).length > 0);
};
