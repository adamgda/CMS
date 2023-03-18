import styled from "styled-components";
import color from "../../../../Envs/Colors";
import { SeparatorTypes } from "./Separator.types";

export const SeparatorLine = styled.div`
  display: block;
  height: 0.125rem;
  background: ${color.background};
  margin: ${(props: SeparatorTypes) => props?.margin} 0;
`;
