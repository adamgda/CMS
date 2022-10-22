import React from "react";
import { IsAdmin } from "../../Services/AuthService";
import { RestrictAccessTypes } from "./RestrictAccess.types";
import { RestrictAccessContainer } from "./RestrictAccess.styled";

const RestrictAccess = ({ children }: RestrictAccessTypes) => {
  return IsAdmin() ? (
    <>{children}</>
  ) : (
    <RestrictAccessContainer>
      <h1>Access Denied</h1>
    </RestrictAccessContainer>
  );
};

export default RestrictAccess;
