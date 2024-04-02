import { ElementTitleTypes } from "@atom/Element/ElementTitle/ElementTitle.types";
import { ElementTasksInfoTypes } from "./Components/ElementTasks/Info/ElementTasksInfo.types";

export interface ProgressElement {
  id: string;
  done?: boolean;
  label: string;
}

export interface ElementStyledTypes {
  mobileAutoWidth?: boolean | undefined;
}

export interface ElementTypes
  extends ElementTitleTypes,
    ElementTasksInfoTypes,
    ElementStyledTypes {
  showDetailsCallback: () => void;
}

export interface ElementData extends ElementTitleTypes, ElementTasksInfoTypes {
  id?: number;
  name: string;
  description: string;
  groupId: string;
  group_id?: string;
}

export interface ElementFetchData {
  data: ElementData;
}
