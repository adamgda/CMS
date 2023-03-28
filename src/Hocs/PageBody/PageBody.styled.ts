import styled from "styled-components";
import breakpoint from "../../Envs/Breakpoints";

export const PageBodyContainer = styled.div`
  display: flex;

  ${breakpoint.mobile} {
    flex-direction: column;
  }
`;

export const PageBodyContent = styled.div`
  flex: 1;
`;
