import React, { useEffect, useState } from "react";
import ProjectHeader from "../../../Atoms/ProjectHeader/ProjectHeader";
import ProgressList from "../../../Atoms/ProgressList/ProgressList";
import ProjectDescription from "../../../Atoms/ProjectDescription/ProjectDescription";
import { ProjectDataContainer } from "./ProjectFullElement.styled";
import { ProjectFullElementTypes } from "./ProjectFullElement.types";
import {
  EditProjectDetails,
  GetProjectDetails,
} from "../../../../Services/ProjectService";
import {
  ProjectProgressTypes,
  ProjectResponseTypes,
} from "../../../../Services/ProjectService.types";

const ProjectFullElement = ({ id }: ProjectFullElementTypes): JSX.Element => {
  const [, setProjectUpdateTime] = useState<Date>();
  const [projectData, setProjectData] = useState<ProjectResponseTypes>();

  const getProjectData = (): void => {
    if (id) {
      GetProjectDetails(id, (res: any) => {
        setProjectData(res?.data);
      });
    }
  };

  const projectUpdate = (updatedList: ProjectProgressTypes[]): void => {
    if (id && projectData) {
      projectData.progress = updatedList;
      EditProjectDetails(id, projectData, () => {
        setProjectData(projectData);
        setProjectUpdateTime(new Date());
      });
    }
  };

  useEffect(() => {
    getProjectData();
  }, [id]);

  return projectData ? (
    <>
      <ProjectHeader
        name={projectData?.name}
        url={projectData?.link}
        progress={projectData?.progress}
      />
      <ProjectDataContainer>
        <ProgressList
          list={projectData?.progress}
          editCallback={projectUpdate}
        />
        {projectData?.description && (
          <ProjectDescription description={projectData?.description} />
        )}
      </ProjectDataContainer>
    </>
  ) : (
    <>...</>
  );
};

export default ProjectFullElement;
