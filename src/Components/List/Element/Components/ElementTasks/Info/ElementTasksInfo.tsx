import React from "react";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";
import { ElementTasksInfoContainer } from "./ElementTasksInfo.styled";
import { ElementTasksInfoTypes } from "./ElementTasksInfo.types";

const ElementTasksInfo = ({ progress }: ElementTasksInfoTypes) => {
  const sum = progress?.length;
  const complete = progress?.filter((el) => el.done).length;

  return (
    <ElementTasksInfoContainer>
      <BeenhereTwoToneIcon />
      <span>
        {complete ? complete : "0"} / {sum ? sum : "0"}
      </span>
    </ElementTasksInfoContainer>
  );
};

export default ElementTasksInfo;
