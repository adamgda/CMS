import { ReactNode } from "react";

export interface GridStyledTypes {
  padding?: string;
}

export interface GridTypes extends GridStyledTypes {
  children: ReactNode;
}
