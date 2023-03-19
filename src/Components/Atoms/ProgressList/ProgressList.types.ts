import { ProjectProgressTypes } from "../../../Services/ProjectService.types";

export interface ProgressListTypes {
  list: ProjectProgressTypes[];
  editCallback?: (updatedList: ProjectProgressTypes[]) => void;
  deleteCallback?: (id: string) => void;
}
