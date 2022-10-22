import React from "react";
import { ElementContainer } from "./Element.styled";
import { ElementTypes } from "./Element.types";
import ElementTitle from "./Components/ElementTitle/ElementTitle";
import ElementTasksInfo from "./Components/ElementTasks/Info/ElementTasksInfo";
import ElementActions from "./Components/ElementActions/ElementActions";

const Element = ({
  title,
  showDetailsCallback,
  progress,
  link,
  showEditCallback,
}: ElementTypes) => {
  return (
    <ElementContainer>
      <div>
        <ElementTitle title={title} link={link} />
        <ElementTasksInfo progress={progress} />
      </div>
      <div>
        <ElementActions
          showDetailsCallback={showDetailsCallback}
          showEditCallback={showEditCallback}
        />
      </div>
    </ElementContainer>
  );
};

export default Element;
