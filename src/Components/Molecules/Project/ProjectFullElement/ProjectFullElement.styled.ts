import styled from "styled-components";
import breakpoint from "../../../../Envs/Breakpoints";

export const ProjectDataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;

  & > div {
    width: 50%;
  }

  ${breakpoint.mobile} {
    flex-direction: column-reverse;

    & > div {
      width: 100%;

      &:last-of-type {
        margin: 0 0 2rem !important;
      }
    }
  }
`;
