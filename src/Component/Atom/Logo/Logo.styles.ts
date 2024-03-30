import styled from "styled-components";
import font from "@env/Fonts";
import color from "@env/Colors";
import { LogoTypes } from "./Logo.types";

export const LogoContainer = styled.div`
  font-size: ${(props: LogoTypes) => props.size};
  font-family: ${font.logo};
  text-align: center;
  margin: 1.5rem 0;
  color: ${color.white};
`;
