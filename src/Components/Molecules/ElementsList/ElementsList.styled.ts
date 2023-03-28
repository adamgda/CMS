import styled from "styled-components";
import color from "../../../Envs/Colors";
import breakpoint from "../../../Envs/Breakpoints";

export const ElementsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  width: calc(100% + 2rem);

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
