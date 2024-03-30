import styled from "styled-components";
import color from "@env/Colors";
import effects from "@env/Effects";
import breakpoint from "@env/Breakpoints";
import { ModalStyledTypes } from "./Modal.types";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9;
  background: ${(props: ModalStyledTypes) =>
    props.withoutBg ? "transparent" : color.glass3};
  }
  
  ${breakpoint.mobile} {
    padding: 0;
  }
`;

export const ModalBox = styled.div`
  background: ${color.thirdBackground};
  padding: ${(props: ModalStyledTypes) =>
    props.padding ? props.padding : "1em 1em 0.5em"};
  border-radius: ${effects.radius};
  color: ${color.white};
  width: 90%;
  max-width: ${(props: ModalStyledTypes) => props.size};
  position: relative;
  box-shadow: ${effects.shadow};
  min-height: 200px;

  ${breakpoint.mobile} {
    width: calc(100% - 2rem);
    margin: 5rem 0 0;
    padding: 1.5rem;
  }
`;

export const ModalContent = styled.div`
  overflow: auto;
  max-height: 85vh;

  h1 {
    margin: 0 -1.5rem;
  }
`;
