import styled from "styled-components";
import color from "../../../Envs/Colors";
import breakpoint from "../../../Envs/Breakpoints";

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
  z-index: 9;

  ${breakpoint.mobile} {
    right: -0.5rem;
    top: -0.5rem;
    width: 3.5rem;
    height: 3.5rem;
    border: 0.5rem solid ${color.thirdBackground};
  }

  svg {
    color: ${color.background};
    display: block;
  }

  &:hover {
    transition: transform 0.25s;
    transform: scale(1.1);
  }
`;
