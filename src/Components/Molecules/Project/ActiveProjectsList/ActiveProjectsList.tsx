import React, { useEffect, useState } from "react";
import Section from "../../../Atoms/Section/Section";
import ProjectFullElement from "../ProjectFullElement/ProjectFullElement";
import { ElementData } from "../../Element/Element.types";
import { FilterByActiveProgress } from "../../../../Helpers/ProjectsHelpers";
import { ActiveProgressProjectsListContainer } from "./ActiveProjectsList.styled";
import { GetProjects } from "../../../../Services/ProjectService";

const ActiveProjectsList = (): JSX.Element => {
  const [inProgressProjects, setInProgressProjects] = useState<
    Array<ElementData>
  >([]);

  const getProjects = async (): Promise<void> => {
    await GetProjects((res: any) =>
      setInProgressProjects(FilterByActiveProgress(res?.data))
    );
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ActiveProgressProjectsListContainer>
      {inProgressProjects?.map((project) => (
        <Section title="Projekt w trakcie" key={project.id}>
          <ProjectFullElement id={project.id || 0} />
        </Section>
      ))}
    </ActiveProgressProjectsListContainer>
  );
};

export default ActiveProjectsList;
