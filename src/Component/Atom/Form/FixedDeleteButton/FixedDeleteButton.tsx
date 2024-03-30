import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { FixedDeleteButtonTypes } from "./FixedDeleteButton.types";
import { FixedButtonContainer } from "./FixedDeleteButton.styled";

export const FixedDeleteButton = ({
  callback,
}: FixedDeleteButtonTypes): JSX.Element => {
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
