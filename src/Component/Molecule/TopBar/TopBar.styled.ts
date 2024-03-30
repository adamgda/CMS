import styled from "styled-components";
import color from "@env/Colors";
import font from "@env/Fonts";
import effects from "@env/Effects";
import { TopBarStyledTypes } from "./TopBar.types";

export const TopBarContainer = styled.div`
  display: flex;
  padding: 0 1.5rem;
  background-color: ${color.thirdBackground};
  border-radius: ${effects.radius};
  margin: ${(props: TopBarStyledTypes) =>
    props.margin ? props.margin : "2rem 0 0"};
  width: calc(100% - 2rem);
  height: 5rem;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: ${font.main};
    font-size: 1.5rem;
    color: ${color.main};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`;
