import styled from "styled-components";
import breakpoint from "@env/Breakpoints";

export const ProjectsSearchStyled = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9;

  & > div {
    margin: 0;
  }

  ${breakpoint.mobile} {
    padding: 0 0.75rem;
    margin: 1rem 0 0.5rem;
  }
`;
