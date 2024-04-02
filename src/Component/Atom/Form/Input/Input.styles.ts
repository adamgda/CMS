import styled from "styled-components";
import color from "@env/Colors";
import effects from "@env/Effects";
import font from "@env/Fonts";
import { InputStyledTypes } from "./Input.types";

export const MainInputContainer = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  width: 100%;

  & > div {
    position: relative;

    &.isError {
      input,
      textarea {
        padding-right: 3rem;
      }
    }

    & > svg {
      position: absolute;
      right: 1rem;
      top: calc(50% - 0.75rem);
      z-index: 3;
      width: 1.5rem;
      height: 1.5rem;
      color: red;
    }
  }

  input,
  textarea,
  select {
    padding: ${(props: InputStyledTypes) => (props.small ? "0.75rem" : "1rem")};
    background: ${color.secondBackground};
    display: block;
    border: 0;
    border-radius: ${effects.radiusS};
    box-sizing: border-box;
    font-family: ${font.main};
    font-size: 1rem;
    color: ${color.white};
    width: 100%;
    position: relative;
    z-index: 2;
    box-shadow: ${effects.shadow};
    outline: none !important;
    line-height: 160%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  select {
    cursor: pointer;
  }

  textarea {
    resize: vertical;
    min-height: 20vh;
  }

  span {
    font-family: ${font.main};
    display: inline-block;
    padding: 0.5em 1em 1em;
    margin: 0 0 -0.5em;
    background: ${color.background};
    border-top-left-radius: ${effects.radiusS};
    border-top-right-radius: ${effects.radiusS};
    position: relative;
    z-index: 1;
    color: ${color.accent};
    font-weight: bold;
    box-shadow: ${effects.shadow};
    font-size: 0.9rem;

    &.required::after {
      display: inline-block;
      content: "*";
      color: ${color.cta};
      margin: 0 0 0 10px;
      vertical-align: middle;
    }
  }

  input::placeholder {
    color: ${color.darkWhite};
    opacity: 1;
  }

  input::-ms-input-placeholder {
    color: ${color.darkWhite};
  }
`;
