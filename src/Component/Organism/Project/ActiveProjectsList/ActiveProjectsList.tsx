import React, { useEffect, useState } from "react";
import { Section } from "@molecule/Section";
import { ProjectFullElement } from "@organism/Project";
import { ElementData } from "@molecule/Element/Element.types";
import { FilterByActiveProgress } from "@helper/ProjectsHelpers";
import { ActiveProgressProjectsListContainer } from "./ActiveProjectsList.styled";
import { GetProjects } from "@service/ProjectService";

export const ActiveProjectsList = (): JSX.Element => {
  const [inProgressProjects, setInProgressProjects] = useState<ElementData[]>(
    []
  );

  const getProjects = async (): Promise<void> => {
    await GetProjects((res: any) =>
      setInProgressProjects(FilterByActiveProgress(res?.data))
    );
  };

  useEffect(() => {
    void getProjects();
  }, []);

  return (
    <ActiveProgressProjectsListContainer>
      {inProgressProjects?.map((project) => (
        <Section title="Projekt w trakcie" key={project.id}>
          <ProjectFullElement id={project.id || 0} withoutProgress />
        </Section>
      ))}
    </ActiveProgressProjectsListContainer>
  );
};
