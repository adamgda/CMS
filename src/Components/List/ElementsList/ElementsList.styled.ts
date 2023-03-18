import styled from "styled-components";
import color from "../../../Envs/Colors";

export const ElementsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  width: calc(100% + 2.75rem);

  & > div:hover {
    background: ${color.secondBackground};
    transition: background 0.75s;
  }
`;
