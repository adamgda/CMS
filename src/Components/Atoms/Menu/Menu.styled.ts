import styled from "styled-components";
import color from "../../../Envs/Colors";
import font from "../../../Envs/Fonts";
import effects from "../../../Envs/Effects";

export const MenuContainer = styled.div`
  justify-self: flex-start;

  ul {
    list-style-type: none;
    padding: 0 2rem;
    margin: 0;

    li {
      a {
        margin: 1rem 0;
        padding: 1rem 2rem;
        color: ${color.white};
        font-family: ${font.main};
        display: flex;
        align-items: center;
        background: ${color.glass1};
        border-radius: ${effects.radiusS};
        justify-content: space-between;

        &:hover,
        &.active {
          background: ${color.glass2};
        }
      }
    }
  }
`;
