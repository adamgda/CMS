import React from "react";
import ProgressBar from "../../Molecules/ProgressBar/ProgressBar";
import { ProjectHeaderTypes } from "./ProjectHeader.types";
import { ProjectHeaderContainer } from "./ProjectHeader.styled";

const ProjectHeader = ({
  name,
  url,
  progress,
}: ProjectHeaderTypes): JSX.Element => {
  return (
    <ProjectHeaderContainer>
      <div>
        <h2>{name}</h2>
        <small>
          <a href={url} target="_blank">
            {url}
          </a>
        </small>
      </div>
      <ProgressBar progress={progress} />
    </ProjectHeaderContainer>
  );
};

export default ProjectHeader;
