import styled from "styled-components";
import effects from "../../../Envs/Effects";
import color from "../../../Envs/Colors";
import font from "../../../Envs/Fonts";
import { ElementStyledTypes } from "./Element.types";

export const ElementContainer = styled.div`
  display: flex;
  margin: 0 0.75rem 1.5rem;
  background: ${color.thirdBackground};
  padding: 2rem;
  border-radius: ${effects.radius};
  width: calc(
    ${(props: ElementStyledTypes) => (props.fullWidth ? 100 : 50)}% - 2rem
  );
  font-family: ${font.main};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > div:first-of-type {
    width: 100%;
  }

  @media screen and (min-width: 1600px) {
    width: calc(
      ${(props: ElementStyledTypes) => (props.fullWidth ? 100 : 33.333)}% - 2rem
    );
  }
`;
