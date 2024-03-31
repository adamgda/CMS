import React, { useEffect, useState } from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { ElementsList } from "@atom/Element";
import { Element } from "@molecule/Element";
import { FixedButton, MainInput } from "@atom/Form";
import { ElementData } from "@molecule/Element/Element.types";
import { GetProjects } from "@service/ProjectService";
import { useNavigate } from "react-router-dom";
import { IsEditor } from "@service/MeService";
import { ProjectsSearchStyled } from "./Projects.styled";

export const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<Array<ElementData>>([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const goToProjectAddPage = (): void => {
    navigate("/new-project");
  };

  const goToProjectDetailsPage = (id: number): void => {
    id && navigate(`/projects/${id}`);
  };

  const getProjects = async (): Promise<void> => {
    await GetProjects((res: any) => setProjects(res?.data));
  };

  useEffect(() => {
    void getProjects();
  }, []);

  const filteredProjects = projects?.filter((project) =>
    project?.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageBody>
      <PageContent>
        <ProjectsSearchStyled>
          <MainInput>
            <input
              type="text"
              placeholder="Szukaj..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </MainInput>
        </ProjectsSearchStyled>
        <ElementsList>
          {filteredProjects?.map((project) => {
            return (
              <Element
                key={project?.id}
                title={project?.name || ""}
                link={project?.link || ""}
                showDetailsCallback={() =>
                  project?.id && goToProjectDetailsPage(project.id)
                }
              />
            );
          })}
        </ElementsList>
      </PageContent>
      {IsEditor && <FixedButton type="new" callback={goToProjectAddPage} />}
    </PageBody>
  );
};
