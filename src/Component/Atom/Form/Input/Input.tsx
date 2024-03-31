import React from "react";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { MainInputContainer } from "./Input.styles";
import { InputTypes } from "./Input.types";

export const MainInput = ({
  label,
  children,
  small,
  required = false,
  isError = false,
}: InputTypes): JSX.Element => {
  return (
    <MainInputContainer small={small || false}>
      {label && <span className={required ? "required" : ""}>{label}</span>}
      <div className={isError ? "isError" : ""}>
        {children}
        {isError && (
          <Tooltip title={`"${label}" jest wymagane!`} placement="top" arrow>
            <ErrorTwoToneIcon />
          </Tooltip>
        )}
      </div>
    </MainInputContainer>
  );
};
