import { ReactNode } from "react";

export interface ContextsTypes {
  children: ReactNode;
}

export interface ContextData {
  state: boolean;
  id: string | null;
}

export interface ToastrData {
  message: string | null;
}

export interface LoaderData {
  show: Function;
}
