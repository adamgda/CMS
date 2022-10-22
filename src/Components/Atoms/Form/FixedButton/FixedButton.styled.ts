import styled from "styled-components";
import color from "../../../../Envs/Colors";
import effects from "../../../../Envs/Effects";
import { FixedButtonStyledTypes } from "./FixedButton.types";

export const FixedButtonContainer = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9;
  background: ${color.cta};
  border-radius: 100%;
  width: ${(props: FixedButtonStyledTypes) =>
    props.noBorder ? "5rem" : "7rem"};
  height: ${(props: FixedButtonStyledTypes) =>
    props.noBorder ? "5rem" : "7rem"};
  display: fixed;
  align-items: center;
  justify-content: center;
  box-shadow: ${effects.shadow};
  color: ${color.background};
  border: ${(props: FixedButtonStyledTypes) =>
    props.noBorder ? "none" : "1rem solid " + color.background};
  margin: ${(props: FixedButtonStyledTypes) => (props.noBorder ? "1rem" : "0")};

  svg {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
