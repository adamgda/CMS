import styled from "styled-components";
import font from "@env/Fonts";
import color from "@env/Colors";
import breakpoint from "@env/Breakpoints";

export const ElementTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  font-family: ${font.main};
  color: ${color.darkWhite};
  position: relative;

  ${breakpoint.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }

  svg {
    color: ${color.white};
    margin: 0 0 0 0.625rem;
  }

  small {
    display: block;
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
    color: ${color.white};
    border-color: ${color.main};

    &:hover {
      text-decoration: none;
      background: ${color.white};
      border-color: ${color.white};
      color: ${color.main};
    }
  }
`;
