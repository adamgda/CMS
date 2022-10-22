import styled from "styled-components";
import font from "../../../../../Envs/Fonts";
import color from "../../../../../Envs/Colors";

export const ElementTitleContainer = styled.div`
  font-size: 1.25rem;
  font-family: ${font.main};
  color: ${color.white};
  font-weight: bold;

  svg {
    color: ${color.white};
    margin: 0 0 0 10px;
  }

  small {
    display: block;
    margin: 0.75rem 0;
    font-size: 0.85rem;
  }

  a {
    color: ${color.main};
    font-weight: normal;

    &:hover {
      text-decoration: underline;
    }
  }
`;
