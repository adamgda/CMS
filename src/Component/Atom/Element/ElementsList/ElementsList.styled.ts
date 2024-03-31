import styled from "styled-components";
import color from "@env/Colors";
import breakpoint from "@env/Breakpoints";

export const ElementsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem 0;
  width: calc(100% + 1.75rem);

  ${breakpoint.mobile} {
    margin: 0;
    width: 100%;
  }

  & > div {
    cursor: pointer;

    &:hover {
      background: ${color.secondBackground};
      transition: background 0.75s;
    }
  }
`;
