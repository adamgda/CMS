import React from "react";
import { ElementTasksInfo } from "@molecule/Element";
import { ProgressBarTypes } from "./ProgressBar.types";
import { ProgressBarContainer, ProgressBarLine } from "./ProgressBar.styled";

export const ProgressBar = ({ progress }: ProgressBarTypes): JSX.Element => {
  const sum = progress?.length || 0;
  const complete = progress?.filter((el) => el.done).length || 0;
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
