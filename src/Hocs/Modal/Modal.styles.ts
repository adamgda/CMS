import styled from "styled-components";
import color from "../../Envs/Colors";
import effects from "../../Envs/Effects";
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
`;

export const ModalContent = styled.div`
  overflow: auto;
  max-height: 85vh;

  h1 {
    margin: 0 -1.5rem;
  }
`;
