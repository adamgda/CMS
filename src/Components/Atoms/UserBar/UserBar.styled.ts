import styled from "styled-components";
import color from "../../../Envs/Colors";
import font from "../../../Envs/Fonts";
import breakpoint from "../../../Envs/Breakpoints";

export const UserBarContainer = styled.div`
  display: flex;
  background: ${color.glass1};
  justify-content: space-between;
  font-family: ${font.logo};
  color: ${color.white};
  align-items: center;

  ${breakpoint.mobile} {
    margin-top: 3rem;
  }

  & > div {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;

    ${breakpoint.mobile} {
      padding-right: 5rem;
    }

    & > a {
      color: ${color.white};
      cursor: pointer;
      margin: 0 0 0 0.5em;

      svg {
        display: block;
      }

      &:hover {
        color: ${color.cta};
      }
    }
  }
`;

export const NavBarSwitch = styled.a`
  display: none;
  background: ${color.white};
  padding: 0.9rem;
  right: 0;
  position: absolute;

  svg {
    color: ${color.main};
  }

  ${breakpoint.mobile} {
    display: block;
  }
`;
