import styled from "styled-components";
import color from "../../../Envs/Colors";

export const ProgressListContainer = styled.div`
  & > div {
    display: inline-block;
  }
`;

export const ProgressListElement = styled.a`
  display: flex;
  padding: 0.5em 0;
  align-items: center;

  & > * {
    margin: 0 0.5rem 0 0.25rem;
  }

  &.done {
    opacity: 0.5;
  }

  .sum {
    flex: 1;
    text-align: right;
  }

  span,
  svg path {
    color: ${color.main};
    fill: ${color.main};
    transition: color 0.5s;
    transition: fill 0.4s;
  }

  &:hover {
    span,
    svg path {
      color: #fff;
      fill: #fff;
      transition: color 0.5s;
      transition: fill 0.4s;
    }
  }
`;
