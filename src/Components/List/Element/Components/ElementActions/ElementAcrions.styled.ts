import styled from "styled-components";
import color from "../../../../../Envs/Colors";

export const ElementActionsContainer = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.25s;

  a {
    color: ${color.accent};
    margin: 0 0.5rem;

    &:hover {
      color: ${color.white};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
