import React from "react";
import ElementTitle from "./Components/ElementTitle/ElementTitle";
import ElementTasksInfo from "./Components/ElementTasks/Info/ElementTasksInfo";
import { ElementContainer } from "./Element.styled";
import { ElementTypes } from "./Element.types";

const Element = ({
  title,
  showDetailsCallback,
  progress,
  link,
}: ElementTypes) => {
  return (
    <ElementContainer onClick={() => showDetailsCallback()}>
      <div>
        <ElementTitle title={title} link={link} />
        <ElementTasksInfo progress={progress} />
      </div>
    </ElementContainer>
  );
};

export default Element;
