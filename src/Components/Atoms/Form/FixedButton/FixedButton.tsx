import React from "react";
import { FixedButtonTypes } from "./FixedButton.types";
import { FixedButtonContainer } from "./FixedButton.styled";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CreateNewFolderTwoToneIcon from "@mui/icons-material/CreateNewFolderTwoTone";

const FixedButton = ({
  type = "save",
  callback,
  noBorder = false,
}: FixedButtonTypes) => {
  const isSaveButton = type === "save";

  const triggerCallback = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    callback && callback();
  };

  return (
    <FixedButtonContainer
      onClick={(e) => !isSaveButton && triggerCallback(e)}
      noBorder={noBorder}
      type={isSaveButton ? "submit" : "button"}
    >
      {isSaveButton ? <SaveTwoToneIcon /> : <CreateNewFolderTwoToneIcon />}
    </FixedButtonContainer>
  );
};

export default FixedButton;
