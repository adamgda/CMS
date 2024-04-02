import styled from "styled-components";
import color from "@env/Colors";
import effects from "@env/Effects";
import font from "@env/Fonts";

export const MainButton = styled.button`
  padding: 1.25rem;
  display: block;
  border: 0;
  width: 100%;
  border-radius: ${effects.radiusS};
  box-sizing: border-box;
  color: ${color.white};
  font-weight: bold;
  cursor: pointer;
  margin: 1.25rem 0;
  font-family: ${font.main};
  font-size: 0.9rem;
  transition: background 0.5s;
  position: relative;
  overflow: hidden;

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${effects.gradient};
    z-index: 1;
    transform: scale(1);
    transition: transform 0.5s;
  }

  &:hover::before {
    transform: scale(3);
    transition: transform 1s;
  }
`;

export const SimpleButton = styled.a`
  display: inline-block;
  border-radius: ${effects.radiusS};
  color: ${color.white};
  border: 0.063rem solid white;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${color.white};
    color: ${color.main};
  }
`;
