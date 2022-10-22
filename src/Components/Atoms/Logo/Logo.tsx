import React from "react";
import { LogoContainer } from "./Logo.styles";
import { LogoTypes } from "./Logo.types";

const Logo = ({ size = "4rem" }: LogoTypes) => {
  return <LogoContainer size={size}>{`<AMZ/>`}</LogoContainer>;
};

export default Logo;
