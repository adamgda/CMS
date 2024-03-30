import React from "react";
import { GridTypes } from "./Grid.types";
import { GridContainer } from "./Grid.styles";

export const Grid = ({ children, padding }: GridTypes): JSX.Element => {
  return <GridContainer padding={padding || "0"}>{children}</GridContainer>;
};
