import styled from "styled-components";
import color from "../../../Envs/Colors";
import effects from "../../../Envs/Effects";

export const ProgressBarContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 30rem;

  & > div {
    margin: 0 0 0 1rem;
  }
`;

export const ProgressBarProgress = styled.div`
  flex: 1;
  background: ${color.background};
  border-radius: ${effects.radius};
  margin: 0 2rem 0 0;

  & > div {
    background: ${color.main};
    height: 1rem;
    border-radius: ${effects.radius};
    box-shadow: ${effects.shadow};
  }
`;
