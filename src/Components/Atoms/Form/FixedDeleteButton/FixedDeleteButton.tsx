import React from "react";
import { FixedDeleteButtonTypes } from "./FixedDeleteButton.types";
import { FixedButtonContainer } from "./FixedDeleteButton.styled";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const FixedDeleteButton = ({ callback }: FixedDeleteButtonTypes) => {
  const triggerCallback = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    callback && callback();
  };

  return (
    <FixedButtonContainer onClick={(e) => triggerCallback(e)} type={"button"}>
      <DeleteTwoToneIcon />
    </FixedButtonContainer>
  );
};

export default FixedDeleteButton;
