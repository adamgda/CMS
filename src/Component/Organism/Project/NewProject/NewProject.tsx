import React from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { ProjectEditForm } from "@organism/Project";
import { Section } from "@molecule/Section";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "@organism/Dashboard";

export const NewProject = (): JSX.Element => {
  const navigate = useNavigate();

  const addProject = (): void => {
    navigate("/projects");
  };

  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <Section title="Nowy projekt">
            <ProjectEditForm id={null} callback={addProject} />
          </Section>
        </DashboardContainer>
      </PageContent>
    </PageBody>
  );
};
