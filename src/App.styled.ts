import styled from "styled-components";
import color from "./Envs/Colors";
import font from "./Envs/Fonts";

export const AppContainer = styled.div`
  background: ${color.background};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: ${font.main};

  & > * {
    position: relative;
    z-index: 2;
  }

  a,
  button {
    cursor: pointer;
    transition: all 0.25s;
    text-decoration: none;

    &:hover {
      transition: all 0.25s;
    }
  }

  * {
    box-sizing: border-box;
  }

  .pageBody.loading {
    filter: blur(0.313rem);
  }
`;
