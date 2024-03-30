import React from "react";
import { ElementTasksInfo } from "@molecule/Element";
import { ProgressBarTypes } from "./ProgressBar.types";
import { ProgressBarContainer, ProgressBarLine } from "./ProgressBar.styled";

export const ProgressBar = ({ progress }: ProgressBarTypes): JSX.Element => {
  const sum = progress?.length;
  const complete = progress?.filter((el) => el.done).length;
  const currentPercent = (complete / sum) * 100;

  return (
    <ProgressBarContainer>
      {sum > 0 && (
        <>
          <ProgressBarLine>
            <div style={{ width: `${currentPercent}%` }} />
          </ProgressBarLine>
          <ElementTasksInfo progress={progress} />
        </>
      )}
    </ProgressBarContainer>
  );
};
