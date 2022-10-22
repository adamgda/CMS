import React from "react";
import { ProgressBarTypes } from "./ProgressBar.types";
import {
  ProgressBarContainer,
  ProgressBarProgress,
} from "./ProgressBar.styled";
import ElementTasksInfo from "../../List/Element/Components/ElementTasks/Info/ElementTasksInfo";

const ProgressBar = ({ progress }: ProgressBarTypes) => {
  const sum = progress?.length;
  const complete = progress?.filter((el) => el.done).length;
  const currentPercent = (complete / sum) * 100;

  return (
    <ProgressBarContainer>
      <ProgressBarProgress>
        <div style={{ width: `${currentPercent}%` }} />
      </ProgressBarProgress>
      <ElementTasksInfo progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
