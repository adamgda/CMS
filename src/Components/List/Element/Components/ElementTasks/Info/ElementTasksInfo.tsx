import React from "react";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";
import { ElementTasksInfoContainer } from "./ElementTasksInfo.styled";
import { ElementTasksInfoTypes } from "./ElementTasksInfo.types";

const ElementTasksInfo = ({ progress }: ElementTasksInfoTypes): JSX.Element => {
  const sum = progress?.length;
  const complete = progress?.filter((el) => el.done).length;

  return (
    <ElementTasksInfoContainer>
      <BeenhereTwoToneIcon />
      {progress?.length > 0 ? (
        <span>
          {complete ? complete : "0"} / {sum ? sum : "0"}
        </span>
      ) : (
        <span>---</span>
      )}
    </ElementTasksInfoContainer>
  );
};

export default ElementTasksInfo;
