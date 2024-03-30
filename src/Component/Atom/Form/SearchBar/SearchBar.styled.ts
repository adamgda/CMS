import styled from "styled-components";
import color from "@env/Colors";
import font from "@env/Fonts";

export const SearchBarContainer = styled.div`
  max-width: 30rem;
  display: flex;
  align-items: center;
  flex: 1;

  span {
    color: ${color.white};
    padding: 0 1rem 0 0;
    font-family: ${font.logo};
  }

  input {
    background: ${color.glass1};
    color: ${color.white};

    &::placeholder {
      color: ${color.white};
    }
  }

  a {
    svg {
      margin: 0 0 0 1rem;
      color: ${color.white};
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
