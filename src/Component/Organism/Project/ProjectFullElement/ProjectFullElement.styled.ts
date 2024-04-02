import styled from "styled-components";
import breakpoint from "@env/Breakpoints";

export const ProjectDataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;

  & > div {
    width: 100%;
  }

  ${breakpoint.mobile} {
    flex-direction: column-reverse;

    & > div {
      width: 100%;
    }
  }
`;
