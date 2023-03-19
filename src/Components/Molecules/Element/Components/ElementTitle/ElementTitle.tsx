import React from "react";
import { ElementTitleContainer } from "./ElementTitle.styled";
import { ElementTitleTypes } from "./ElementTitle.types";

const ElementTitle = ({ title, link, children }: ElementTitleTypes) => {
  return (
    <ElementTitleContainer>
      {title}
      {link && (
        <small>
          <a href={link} target="_blank">
            {link}
          </a>
        </small>
      )}
      {children}
    </ElementTitleContainer>
  );
};

export default ElementTitle;
