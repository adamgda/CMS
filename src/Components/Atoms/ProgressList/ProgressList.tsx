import React, { useContext } from "react";
import {
  ProgressListContainer,
  ProgressListElement,
} from "./ProgressList.styled";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { ProgressListTypes } from "./ProgressList.types";
import { EditProjectDetails } from "../../../Services/ProjectService";
import { LoaderContext } from "../../../Contexts/LoaderContext";

const ProgressList = ({ projectData }: ProgressListTypes): JSX.Element => {
  const loader = useContext(LoaderContext);

  const changeProgressState = (id: string) => {
    if (projectData) {
      loader.show(true);

      const data = projectData;
      const progressIndex = data?.progress.findIndex((el) => el.id === id);

      if (progressIndex !== -1) {
        const progressEl = data.progress[progressIndex];

        progressEl.done = !progressEl.done;

        EditProjectDetails(
          projectData?.id,
          data,
          () => null,
          () => loader.show(false)
        );
      }
    }
  };

  return (
    <ProgressListContainer>
      {projectData?.progress?.map((el) => (
        <ProgressListElement
          key={el.id}
          className={el.done ? "done" : ""}
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
    </ProgressListContainer>
  );
};

export default ProgressList;
