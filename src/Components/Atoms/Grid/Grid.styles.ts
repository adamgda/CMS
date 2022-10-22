import styled from "styled-components";
import { GridStyledTypes } from "./Grid.types";

export const GridContainer = styled.div`
  display: flex;
  padding: ${(props: GridStyledTypes) => (props.padding ? props.padding : "0")};

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
