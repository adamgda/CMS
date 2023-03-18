import React from "react";
import { RestrictAccessTypes } from "./RestrictAccess.types";
import { RestrictAccessContainer } from "./RestrictAccess.styled";
import { IsAdmin } from "../../Services/MeService";

const RestrictAccess = ({ children }: RestrictAccessTypes) => {
  return IsAdmin ? (
    <>{children}</>
  ) : (
    <RestrictAccessContainer>
      <h1>Access Denied</h1>
    </RestrictAccessContainer>
  );
};

export default RestrictAccess;
