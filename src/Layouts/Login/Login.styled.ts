import styled from "styled-components";
import color from "../../Envs/Colors";

export const LoginPage = styled.div`
  background: ${color.background};
  width: 100vw;
  height: 100vh;

  & > div {
    padding-top: 7.5rem;
  }
`;

export const LoginLogo = styled.div`
  position: absolute;
  top: -9rem;
  z-index: 2;
  width: 100%;
  text-align: center;
  margin: 0 -1rem;
`;
