import styled from "styled-components";
import effects from "@env/Effects";
import color from "@env/Colors";
import font from "@env/Fonts";
import breakpoint from "@env/Breakpoints";

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

  ${breakpoint.mobile} {
    width: auto;
    margin: 0.75rem;
  }

  & > div {
    width: 100%;
  }
`;
