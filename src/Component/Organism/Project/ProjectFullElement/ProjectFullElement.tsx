import React, { useEffect, useState } from "react";
import { ProjectHeader } from "@molecule/ProjectHeader";
import { ProgressList } from "@atom/ProgressList";
import { ProjectDescription } from "@atom/ProjectDescription";
import { ProjectDataContainer } from "./ProjectFullElement.styled";
import { ProjectFullElementTypes } from "./ProjectFullElement.types";
import { EditProjectDetails, GetProjectDetails } from "@service/ProjectService";
import {
  ProjectProgressTypes,
  ProjectResponseTypes,
} from "@service/ProjectService.types";

export const ProjectFullElement = ({
  id,
  withoutProgress,
}: ProjectFullElementTypes): JSX.Element => {
  const [, setProjectUpdateTime] = useState<Date>();
  const [projectData, setProjectData] = useState<ProjectResponseTypes>();

  const getProjectData = (): void => {
    if (id) {
      void GetProjectDetails(id, (res: any) => {
        setProjectData(res?.data);
      });
    }
  };

  const projectUpdate = (updatedList: ProjectProgressTypes[]): void => {
    if (id && projectData) {
      projectData.progress = updatedList;
      void EditProjectDetails(id, projectData, () => {
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
        name={projectData?.name || ""}
        url={projectData?.link || ""}
      />
      {!withoutProgress && (
        <ProjectDataContainer>
          <ProgressList
            list={projectData?.progress}
            editCallback={projectUpdate}
          />
          {projectData?.description && (
            <ProjectDescription description={projectData.description} />
          )}
        </ProjectDataContainer>
      )}
    </>
  ) : (
    <>...</>
  );
};
