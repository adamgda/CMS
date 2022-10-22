import React from "react";
import { ProjectHeaderTypes } from "./ProjectHeader.types";
import { ProjectHeaderContainer } from "./ProjectHeader.styled";
import ProgressBar from "../ProgressBar/ProgressBar";

const ProjectHeader = ({ name, url, progress }: ProjectHeaderTypes) => {
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
