import React, { useEffect } from "react";
import { ModalTypes } from "./Modal.types";
import { ModalContainer, ModalBox, ModalContent } from "./Modal.styles";
import CloseIcon from "../../Components/Atoms/CloseIcon/CloseIcon";

const Modal = ({
  children,
  size = "standard",
  closeCallback,
  lightBg = false,
  withoutBg = false,
  padding,
}: ModalTypes) => {
  const sizeStringToPx = () => {
    switch (size) {
      case "big":
        return "1000px";
      case "small":
        return "400px";
      default:
        return "600px";
    }
  };

  useEffect(() => {
    if (closeCallback) {
      document.addEventListener(
        "keydown",
        (e) => e.key === "Escape" && closeCallback(),
        false
      );
      return () => {
        document.removeEventListener(
          "keydown",
          (e) => e.key === "Escape" && closeCallback(),
          false
        );
      };
    }
  }, []);

  return (
    <ModalContainer withoutBg={withoutBg}>
      <ModalBox size={sizeStringToPx()} lightBg={lightBg} padding={padding}>
        {closeCallback && (
          <a onClick={() => closeCallback()}>
            <CloseIcon />
          </a>
        )}
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
