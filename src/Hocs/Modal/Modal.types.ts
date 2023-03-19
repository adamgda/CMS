import { ReactNode } from "react";

export interface ModalStyledTypes {
  size?: string;
  lightBg?: boolean;
  withoutBg?: boolean;
  padding?: string;
}

export interface ModalTypes extends ModalStyledTypes {
  size?: "standard" | "big" | "small";
  children: ReactNode;
  closeCallback?: () => void;
}

export interface ModalDataTypes {
  show: boolean;
  data: number | null;
  type: string | "details" | "edit";
}
