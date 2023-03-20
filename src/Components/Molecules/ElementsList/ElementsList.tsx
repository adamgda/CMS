import React from "react";
import { ElementsListTypes } from "./ElementsList.types";
import { ElementsListContainer } from "./ElementsList.styled";

const ElementsList = ({ children }: ElementsListTypes): JSX.Element => {
  return <ElementsListContainer>{children}</ElementsListContainer>;
};

export default ElementsList;
