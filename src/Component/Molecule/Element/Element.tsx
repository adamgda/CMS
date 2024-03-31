import React from "react";
import { ElementTitle } from "@atom/Element";
import { ElementContainer } from "./Element.styled";
import { ElementTypes } from "./Element.types";

export const Element = ({ title, showDetailsCallback, link }: ElementTypes) => {
  return (
    <ElementContainer onClick={showDetailsCallback}>
      <ElementTitle title={title} link={link || ""} />
    </ElementContainer>
  );
};
