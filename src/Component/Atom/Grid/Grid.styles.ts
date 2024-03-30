import styled from "styled-components";
import { GridStyledTypes } from "./Grid.types";
import breakpoint from "@env/Breakpoints";

export const GridContainer = styled.div`
  display: flex;
  padding: ${(props: GridStyledTypes) => props.padding};

  ${breakpoint.mobile} {
    flex-wrap: wrap;
    padding: 0;
  }

  & > * {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    ${breakpoint.mobile} {
      margin: 1rem 0;
      padding: 0 0 0.25rem;
    }
  }
`;
