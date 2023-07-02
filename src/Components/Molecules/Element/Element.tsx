import React from "react";
import ElementTitle from "./Components/ElementTitle/ElementTitle";
import { ElementContainer } from "./Element.styled";
import { ElementTypes } from "./Element.types";

const Element = ({ title, showDetailsCallback, link }: ElementTypes) => {
  return (
    <ElementContainer onClick={() => showDetailsCallback()}>
      <ElementTitle title={title} link={link} />
    </ElementContainer>
  );
};

export default Element;
