import React from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { CloseIconContainer } from "./CloseIcon.styled";

const CloseIcon = (): JSX.Element => {
  return (
    <CloseIconContainer>
      <CloseTwoToneIcon />
    </CloseIconContainer>
  );
};

export default CloseIcon;
