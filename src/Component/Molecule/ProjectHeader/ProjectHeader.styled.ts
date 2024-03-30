import styled from "styled-components";
import color from "@env/Colors";
import font from "@env/Fonts";

export const ProjectHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: ${font.main};
  }

  a {
    color: ${color.main};
    font-size: 1rem;
  }
`;
