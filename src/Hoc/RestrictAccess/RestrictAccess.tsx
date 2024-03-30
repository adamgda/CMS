import React from "react";
import { RestrictAccessTypes } from "./RestrictAccess.types";
import { RestrictAccessContainer } from "./RestrictAccess.styled";
import { IsAdmin } from "@service/MeService";

export const RestrictAccess = ({ children }: RestrictAccessTypes) => {
  return IsAdmin ? (
    <>{children}</>
  ) : (
    <RestrictAccessContainer>
      <h1>Access Denied</h1>
    </RestrictAccessContainer>
  );
};
