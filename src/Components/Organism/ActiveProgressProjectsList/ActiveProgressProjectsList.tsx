import React, { useContext, useEffect, useState } from "react";
import Section from "../../Atoms/Section/Section";
import ProjectFullElement from "../Project/ProjectFullElement/ProjectFullElement";
import { ElementData } from "../../List/Element/Element.types";
import { LoaderContext } from "../../../Contexts/LoaderContext";
import { FilterByActiveProgress } from "../../../Helpers/ProjectsHelpers";
import { ActiveProgressProjectsListContainer } from "./ActiveProgressProjectsList.styled";
import { GetUserData, IsAdmin } from "../../../Services/AuthService";
import {
  GetAllProjects,
  GetProjectsByGroup,
} from "../../../Services/ProjectService";

const ActiveProgressProjectsList = () => {
  const [inProgressProjects, setInProgressProjects] = useState<
    Array<ElementData>
  >([]);
  const loader = useContext(LoaderContext);

  const getProjects = () => {
    loader.show(true);
    IsAdmin()
      ? GetAllProjects(
          (res: any) =>
            setInProgressProjects(FilterByActiveProgress(res?.data)),
          () => loader.show(false)
        )
      : GetProjectsByGroup(
          GetUserData().group_id,
          (res: any) =>
            setInProgressProjects(FilterByActiveProgress(res?.data)),
          () => loader.show(false)
        );
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ActiveProgressProjectsListContainer>
      {inProgressProjects?.map((project) => (
        <Section title="Projekt w trakcie" key={project.id}>
          <ProjectFullElement id={project.id} />
        </Section>
      ))}
    </ActiveProgressProjectsListContainer>
  );
};

export default ActiveProgressProjectsList;
