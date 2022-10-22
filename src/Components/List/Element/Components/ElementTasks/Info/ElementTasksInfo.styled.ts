import styled from "styled-components";
import color from "../../../../../../Envs/Colors";
import font from "../../../../../../Envs/Fonts";

export const ElementTasksInfoContainer = styled.div`
  display: flex;
  color: ${color.accent};
  margin: 1rem 0 0;
  font-weight: bold;
  font-family: ${font.logo};
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    margin: 0 0 0 0.5rem;
    font-size: 0.8rem;
  }
`;
