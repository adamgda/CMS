import styled from "styled-components";
import font from "../../../Envs/Fonts";
import color from "../../../Envs/Colors";
import { LogoTypes } from "./Logo.types";

export const LogoContainer = styled.div`
  font-size: ${(props: LogoTypes) => props.size};
  font-family: ${font.logo};
  text-align: center;
  margin: 1.5rem 0;
  color: ${color.white};
`;
