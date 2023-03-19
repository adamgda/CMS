import styled from "styled-components";
import color from "../../../Envs/Colors";

export const CloseIconContainer = styled.span`
  position: absolute;
  right: -1rem;
  top: -1rem;
  background: ${color.cta};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 0.75rem solid ${color.thirdBackground};
  transition: transform 0.25s;

  svg {
    color: ${color.background};
    display: block;
  }

  &:hover {
    transition: transform 0.25s;
    transform: scale(1.1);
  }
`;
