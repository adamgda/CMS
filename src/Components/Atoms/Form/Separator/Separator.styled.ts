import styled from "styled-components";
import color from "../../../../Envs/Colors";
import { SeparatorTypes } from "./Separator.types";

export const SeparatorLine = styled.div`
  display: block;
  height: 2px;
  background: ${color.background};
  margin: ${(props: SeparatorTypes) => props?.margin} 0;
`;
