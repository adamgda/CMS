import React from "react";
import { GridTypes } from "./Grid.types";
import { GridContainer } from "./Grid.styles";

const Grid = ({ children, padding }: GridTypes): JSX.Element => {
  return <GridContainer padding={padding}>{children}</GridContainer>;
};

export default Grid;
