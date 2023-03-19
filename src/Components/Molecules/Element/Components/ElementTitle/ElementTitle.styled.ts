import styled from "styled-components";
import font from "../../../../../Envs/Fonts";
import color from "../../../../../Envs/Colors";

export const ElementTitleContainer = styled.div`
  font-size: 1.25rem;
  font-family: ${font.main};
  color: ${color.white};
  font-weight: bold;
  position: relative;

  svg {
    color: ${color.white};
    margin: 0 0 0 0.625rem;
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

  .titleButton {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.875rem;
    background: ${color.main};
    color: #fff;
    border-color: ${color.main};

    &:hover {
      text-decoration: none;
      background: #fff;
      border-color: #fff;
      color: ${color.main};
    }
  }
`;
