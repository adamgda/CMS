import { ElementTitleTypes } from "./Components/ElementTitle/ElementTitle.types";
import { ElementTasksInfoTypes } from "./Components/ElementTasks/Info/ElementTasksInfo.types";

export interface ProgressElement {
  id: string;
  done?: boolean;
  label: string;
}

export interface ElementTypes extends ElementTitleTypes, ElementTasksInfoTypes {
  showDetailsCallback: () => void;
  progress: ProgressElement[];
  link: string;
}

export interface ElementStyledTypes {
  fullWidth?: boolean;
}

export interface ElementData {
  id?: number;
  name: string;
  progress: ProgressElement[];
  link: string;
  description: string;
  groupId: string;
  group_id?: string;
}

export interface ElementFetchData {
  data: ElementData;
}
