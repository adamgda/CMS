import React from "react";
import { MainInputContainer } from "./Input.styles";
import { InputTypes } from "./Input.types";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import Tooltip from "@mui/material/Tooltip";

const MainInput = ({
  label,
  children,
  small = false,
  required = false,
  isError = false,
}: InputTypes) => {
  return (
    <MainInputContainer small={small}>
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

export default MainInput;
