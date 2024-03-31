import React from "react";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";
import { ElementTasksInfoContainer } from "./ElementTasksInfo.styled";
import { ElementTasksInfoTypes } from "./ElementTasksInfo.types";

export const ElementTasksInfo = ({
  progress,
}: ElementTasksInfoTypes): JSX.Element => {
  const sum = progress?.length || 0;
  const complete = progress?.filter((el) => el.done).length;

  return (
    <ElementTasksInfoContainer>
      <BeenhereTwoToneIcon />
      {sum > 0 ? (
        <span>
          {complete ? complete : "0"} / {sum ? sum : "0"}
        </span>
      ) : (
        <span>---</span>
      )}
    </ElementTasksInfoContainer>
  );
};
