import React from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import ProjectEditForm from "../../Components/Organism/Project/ProjectEditForm/ProjectEditForm";
import Section from "../../Components/Atoms/Section/Section";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../Dashboard/Dashboard.styled";

const NewProject = () => {
  const navigate = useNavigate();

  const addProject = () => {
    navigate("/projects");
  };

  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <Section title="Nowy projekt">
            <ProjectEditForm id={null} finishCallback={addProject} />
          </Section>
        </DashboardContainer>
      </PageContent>
    </PageBody>
  );
};

export default NewProject;
