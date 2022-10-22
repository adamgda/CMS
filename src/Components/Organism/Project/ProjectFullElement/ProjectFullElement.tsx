import React, { ReactNode, useContext, useEffect, useState } from "react";
import ProjectHeader from "../../../Atoms/ProjectHeader/ProjectHeader";
import ProgressList from "../../../Atoms/ProgressList/ProgressList";
import ProjectDescription from "../../../Atoms/ProjectDescription/ProjectDescription";
import { ProjectFullElementContainer } from "./ProjectFullElement.styled";
import { ProjectFullElementTypes } from "./ProjectFullElement.types";
import { ElementData } from "../../../List/Element/Element.types";
import { LoaderContext } from "../../../../Contexts/LoaderContext";
import { GetProjectDetails } from "../../../../Services/ProjectService";

const ProjectFullElement = ({ id }: ProjectFullElementTypes): JSX.Element => {
  const [projectData, setProjectData] = useState<ElementData | null>(null);
  const loader = useContext(LoaderContext);

  const getProjectData = () => {
    if (id) {
      loader.show(true);
      GetProjectDetails(
        id,
        (res: any) => setProjectData(res?.data),
        () => loader.show(false)
      );
    }
  };

  useEffect(() => {
    getProjectData();
  }, [id]);

  return (
    <ProjectFullElementContainer>
      {projectData && (
        <>
          <ProjectHeader
            name={projectData?.name}
            url={projectData?.link}
            progress={projectData?.progress}
          />
          <ProgressList projectData={projectData} />
          <ProjectDescription description={projectData?.description} />
        </>
      )}
    </ProjectFullElementContainer>
  );
};

export default ProjectFullElement;
