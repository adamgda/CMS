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
  const [projectData, setProjectData] = useState<ProjectResponseTypes | null>(
    null
  );

  const getProjectData = (): void => {
    if (id) {
      GetProjectDetails(id, (res: any) => {
        setProjectData(res?.data);
      });
    }
  };

  const projectUpdate = (updatedList: Array<ProjectProgressTypes>): void => {
    if (id && projectData) {
      projectData.progress = updatedList;
      EditProjectDetails(id, projectData, () => setProjectData(projectData));
    }
  };

  useEffect(() => {
    getProjectData();
  }, [id]);

  //projectData?.progress?.filter((el) => el.done).length

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
