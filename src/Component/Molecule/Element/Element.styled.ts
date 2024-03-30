import styled from "styled-components";
import effects from "@env/Effects";
import color from "@env/Colors";
import font from "@env/Fonts";

export const ElementContainer = styled.div`
  display: flex;
  margin: 0 0.75rem 0.75rem;
  background: ${color.thirdBackground};
  padding: 1.25rem;
  border-radius: ${effects.radius};
  width: 100%;
  font-family: ${font.main};
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
  }
`;
