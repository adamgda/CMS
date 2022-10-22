import styled from "styled-components";
import effects from "../../../../Envs/Effects";
import color from "../../../../Envs/Colors";

export const FixedButtonContainer = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 7rem;
  z-index: 9;
  background: red;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  display: fixed;
  align-items: center;
  justify-content: center;
  box-shadow: ${effects.shadow};
  color: ${color.background};
  border: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
