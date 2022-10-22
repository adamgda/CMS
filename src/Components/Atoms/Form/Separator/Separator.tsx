import React from "react";
import { SeparatorLine } from "./Separator.styled";
import { SeparatorTypes } from "./Separator.types";

const Separator = ({ margin = "1rem" }: SeparatorTypes) => {
  return <SeparatorLine margin={margin} />;
};

export default Separator;
