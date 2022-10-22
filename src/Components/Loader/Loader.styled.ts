import styled from "styled-components";
import color from "../../Envs/Colors";

export const LoaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.glass2};

  svg {
    width: 5rem;
    height: 5rem;
  }
`;
