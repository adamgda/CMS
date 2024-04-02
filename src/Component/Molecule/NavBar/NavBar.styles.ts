import styled from "styled-components";
import effects from "@env/Effects";
import breakpoint from "@env/Breakpoints";

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;

  & > div {
    margin: 2rem;
    position: absolute;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    top: 0;
    left: 0;
    background-image: ${effects.gradient};
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${effects.radius};
    display: flex;
    overflow: hidden;
    box-shadow: ${effects.shadow};
  }

  ${breakpoint.mobile} {
    max-width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
    transform: translateY(-85.5%);
    transition: transform 0.5s;

    & > div {
      margin: 0.75rem;
      position: static;
      width: auto;
      height: auto;
    }

    &.show {
      transform: translateY(0);
      transition: transform 0.5s;
    }
  }
`;

export const NavBarLogo = styled.div`
  padding: 1rem;
`;
