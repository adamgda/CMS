import React from "react";
import { ElementTitle } from "@atom/Element";
import { ElementContainer } from "@molecule/Element/Element.styled";
import { SectionTypes } from "./Section.types";
import { SectionContainer } from "./Section.styles";

export const Section = ({
  title,
  children,
  titleComponent,
  mobileAutoWidth,
}: SectionTypes): JSX.Element => {
  return (
    <ElementContainer mobileAutoWidth={mobileAutoWidth}>
      <div>
        <ElementTitle title={title}>{titleComponent}</ElementTitle>
        <SectionContainer>{children}</SectionContainer>
      </div>
    </ElementContainer>
  );
};
