import styled from "styled-components";
import color from "@env/Colors";
import font from "@env/Fonts";
import breakpoint from "@env/Breakpoints";
import effects from "@env/Effects";

export const AppContainer = styled.div`
  background: ${color.background};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: ${font.main};

  ${breakpoint.mobile} {
    height: auto;
  }

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

  .Toastify * {
    font-family: ${font.main};
    font-size: 0.85rem;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${color.thirdBackground};
    border-radius: ${effects.radius};
  }

  *::-webkit-scrollbar-thumb {
    background: ${color.main};
    border-radius: ${effects.radius};
    cursor: pointer;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${color.main};
  }
`;
