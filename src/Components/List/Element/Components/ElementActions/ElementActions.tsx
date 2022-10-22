import React from "react";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { ElementActionsContainer } from "./ElementAcrions.styled";
import { ElementActionsTypes } from "./ElementActionsTypes";
import { IsEditor } from "../../../../../Services/AuthService";

const ElementActions = ({
  showDetailsCallback,
  showEditCallback,
}: ElementActionsTypes) => {
  return (
    <ElementActionsContainer>
      <a onClick={() => showDetailsCallback()}>
        <VisibilityTwoToneIcon />
      </a>
      {IsEditor() && (
        <a onClick={() => showEditCallback()}>
          <EditTwoToneIcon />
        </a>
      )}
    </ElementActionsContainer>
  );
};

export default ElementActions;
