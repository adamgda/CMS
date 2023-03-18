import styled from "styled-components";
import color from "../../../Envs/Colors";
import effects from "../../../Envs/Effects";

export const ProjectDescriptionContainer = styled.div`
  padding: 1.25rem;
  border-radius: ${effects.radiusS};
  display: block;
  display: inline-block;
  background: ${color.secondBackground};
  box-shadow: ${effects.shadow};
  margin: 2rem 0 0;
  white-space: pre-wrap;
  line-height: 160%;
`;
