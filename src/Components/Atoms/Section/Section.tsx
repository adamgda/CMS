import React from "react";
import ElementTitle from "../../Molecules/Element/Components/ElementTitle/ElementTitle";
import { ElementContainer } from "../../Molecules/Element/Element.styled";
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
