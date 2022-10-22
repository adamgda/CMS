import styled from "styled-components";
import color from "../../../Envs/Colors";
import font from "../../../Envs/Fonts";

export const UserBarContainer = styled.div`
  display: flex;
  background: ${color.glass1};
  justify-content: space-between;
  font-family: ${font.logo};
  color: ${color.white};
  align-items: center;

  & > div {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

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
