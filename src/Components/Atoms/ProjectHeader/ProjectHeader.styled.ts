import styled from "styled-components";
import color from "../../../Envs/Colors";
import font from "../../../Envs/Fonts";

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
