import { ElementTitleTypes } from "./Components/ElementTitle/ElementTitle.types";
import { ElementTasksInfoTypes } from "./Components/ElementTasks/Info/ElementTasksInfo.types";

export interface ProgressElement {
  id: string;
  done: boolean;
  label: string;
}

export interface ElementTypes extends ElementTitleTypes, ElementTasksInfoTypes {
  showDetailsCallback: Function;
  showEditCallback: Function;
  progress: Array<ProgressElement>;
  link: string;
}

export interface ElementStyledTypes {
  fullWidth?: boolean;
}

export interface ElementData {
  id: number;
  name: string;
  progress: Array<ProgressElement>;
  link: string;
  description: string;
  groupId: string;
  group_id?: string;
}
