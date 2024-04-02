import React from "react";
import { ElementTitle } from "@atom/Element";
import { ElementContainer } from "./Element.styled";
import { ElementTypes } from "./Element.types";

export const Element = ({
  title,
  showDetailsCallback,
  link,
  mobileAutoWidth,
}: ElementTypes) => {
  return (
    <ElementContainer
      onClick={showDetailsCallback}
      mobileAutoWidth={mobileAutoWidth}
    >
      <ElementTitle title={title} link={link || ""} />
    </ElementContainer>
  );
};
