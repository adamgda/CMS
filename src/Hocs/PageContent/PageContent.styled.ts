import styled from "styled-components";
import effects from "../../Envs/Effects";
import color from "../../Envs/Colors";

export const PageContentContainer = styled.div`
  margin: 2rem 0;
  flex: 1;
  border-radius: ${effects.radius};
  height: calc(100vh - 4rem);
  position: relative;

  & > div {
    overflow: auto;
    height: calc(100vh - 4rem);
    position: relative;
    z-index: 2;
    padding: 0 1rem 0 0;
  }
`;
