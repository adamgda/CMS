import React from "react";
import { ProjectDescriptionContainer } from "./ProjectDescription.styled";
import { ProjectDescriptionTypes } from "./ProjectDescription.types";

const ProjectDescription = ({
  description,
}: ProjectDescriptionTypes): JSX.Element => {
  return (
    <ProjectDescriptionContainer>{description}</ProjectDescriptionContainer>
  );
};

export default ProjectDescription;
