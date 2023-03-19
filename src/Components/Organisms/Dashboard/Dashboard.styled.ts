import styled from "styled-components";

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
`;
