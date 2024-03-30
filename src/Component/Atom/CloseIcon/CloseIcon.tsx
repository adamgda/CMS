import React from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { CloseIconContainer } from "./CloseIcon.styled";

export const CloseIcon = (): JSX.Element => {
  return (
    <CloseIconContainer>
      <CloseTwoToneIcon />
    </CloseIconContainer>
  );
};
