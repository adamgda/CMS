import React from "react";
import ElementTitle from "../../List/Element/Components/ElementTitle/ElementTitle";
import { ElementContainer } from "../../List/Element/Element.styled";
import { SectionTypes } from "./Section.types";
import { SectionContainer } from "./Section.styles";

const Section = ({
  title,
  children,
  titleComponent,
}: SectionTypes): JSX.Element => {
  return (
    <ElementContainer fullWidth>
      <div>
        <ElementTitle title={title}>{titleComponent}</ElementTitle>
        <SectionContainer>{children}</SectionContainer>
      </div>
    </ElementContainer>
  );
};

export default Section;
