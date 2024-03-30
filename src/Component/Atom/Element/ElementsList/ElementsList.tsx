import React from "react";
import { ElementsListTypes } from "./ElementsList.types";
import { ElementsListContainer } from "./ElementsList.styled";

export const ElementsList = ({ children }: ElementsListTypes): JSX.Element => {
  return <ElementsListContainer>{children}</ElementsListContainer>;
};
