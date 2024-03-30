import React from "react";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CreateNewFolderTwoToneIcon from "@mui/icons-material/CreateNewFolderTwoTone";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { FixedButtonTypes } from "./FixedButton.types";
import { FixedButtonContainer } from "./FixedButton.styled";

export const FixedButton = ({
  type = "save",
  callback,
  noBorder = false,
}: FixedButtonTypes): JSX.Element => {
  const isSaveButton = type === "save";

  const triggerCallback = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    callback && callback();
  };

  const buttonIcon = (): JSX.Element => {
    switch (type) {
      case "save":
        return <SaveTwoToneIcon />;
      case "edit":
        return <CreateTwoToneIcon />;
      case "new":
        return <CreateNewFolderTwoToneIcon />;
      default:
        return <>?</>;
    }
  };

  return (
    <FixedButtonContainer
      onClick={(e) => !isSaveButton && triggerCallback(e)}
      noBorder={noBorder}
      type={isSaveButton ? "submit" : "button"}
    >
      {buttonIcon()}
    </FixedButtonContainer>
  );
};
