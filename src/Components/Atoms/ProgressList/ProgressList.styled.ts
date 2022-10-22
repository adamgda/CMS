import styled from "styled-components";
import color from "../../../Envs/Colors";
import effects from "../../../Envs/Effects";

export const ProgressListContainer = styled.div`
  margin: 2rem 0 0;
`;

export const ProgressListElement = styled.a`
  border: 1px solid ${color.main};
  color: ${color.main};
  padding: 0.5rem;
  border-radius: ${effects.radiusS};
  display: inline-flex;
  margin: 0 1rem 0rem 0;
  align-items: center;

  & > * {
    margin: 0 0.5rem 0 0.25rem;
  }

  &:not(.done):hover {
    background: ${color.main};
    color: ${color.background};
  }

  &.done {
    opacity: 0.5;
    border: 1px dashed ${color.main};

    &:hover {
      opacity: 0.8;
    }
  }
`;
