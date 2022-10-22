import styled from "styled-components";
import effects from "../../Envs/Effects";

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;

  & > div {
    margin: 2rem;
    position: absolute;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    top: 0;
    left: 0;
    background-image: ${effects.gradient};
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${effects.radius};
    display: flex;
    overflow: hidden;
    box-shadow: ${effects.shadow};
  }
`;

export const NavBarLogo = styled.div`
  padding: 1rem;
`;
