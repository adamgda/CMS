import styled from "styled-components";
import breakpoint from "@env/Breakpoints";

export const DashboardContainer = styled.div`
  display: flex;
  margin: 0 -0.75rem;
  width: calc(100% + 1.5rem);

  & > div {
    align-items: flex-start;

    & + div {
      margin-right: 1.25rem;
    }
  }

  ${breakpoint.mobile} {
    width: 100%;
    margin: 0;
    flex-direction: column;

    & > div + div {
      margin: 1rem 1rem 0;
    }
  }
`;
