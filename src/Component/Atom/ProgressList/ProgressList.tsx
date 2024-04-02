import React from "react";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { ProgressListTypes } from "./ProgressList.types";
import {
  ProgressListContainer,
  ProgressListElement,
} from "./ProgressList.styled";

export const ProgressList = ({
  list,
  editCallback,
  deleteCallback,
}: ProgressListTypes): JSX.Element => {
  const changeProgressState = (id: string): void => {
    if (list) {
      const progressIndex = list?.findIndex((el) => el.id === id);

      if (progressIndex !== -1) {
        const progressEl = list[progressIndex];

        progressEl.done = !progressEl.done;
        editCallback && editCallback(list);
      }
    }
    deleteCallback && deleteCallback(id);
  };

  return list && list.length > 0 ? (
    <ProgressListContainer>
      <div>
        {list?.map((el) => (
          <ProgressListElement
            key={el.id}
            className={el.done ? "done" : "progress"}
            onClick={() => changeProgressState(el.id)}
          >
            {el.done ? (
              <CheckBoxTwoToneIcon />
            ) : (
              <CheckBoxOutlineBlankTwoToneIcon />
            )}
            <span>{el.label}</span>
          </ProgressListElement>
        ))}
      </div>
    </ProgressListContainer>
  ) : (
    <></>
  );
};
