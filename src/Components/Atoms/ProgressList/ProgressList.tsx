import React, { useEffect, useState } from "react";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { ProgressListTypes } from "./ProgressList.types";
import { numberWithCommas } from "../../../Helpers/StringHelpers";
import {
  ProgressListContainer,
  ProgressListElement,
} from "./ProgressList.styled";

const ProgressList = ({
  list,
  editCallback,
}: ProgressListTypes): JSX.Element => {
  const [, setProjectProgress] = useState(0);

  const changeProgressState = (id: string): void => {
    if (list) {
      const progressIndex = list?.findIndex((el) => el.id === id);

      if (progressIndex !== -1) {
        const progressEl = list[progressIndex];

        progressEl.done = !progressEl.done;
        editCallback(list);
        setProjectProgress(list.filter((el) => el.done).length);
      }
    }
  };

  return list?.length > 0 ? (
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
            {el.sum && (
              <span className="sum">{numberWithCommas(el.sum)} zł</span>
            )}
          </ProgressListElement>
        ))}
      </div>
    </ProgressListContainer>
  ) : (
    <></>
  );
};

export default ProgressList;
