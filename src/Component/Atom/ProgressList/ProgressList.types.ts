import { ProjectProgressTypes } from "@service/ProjectService.types";

export interface ProgressListTypes {
  list: ProjectProgressTypes[] | undefined;
  editCallback?: (updatedList: ProjectProgressTypes[]) => void;
  deleteCallback?: (id: string) => void;
}
