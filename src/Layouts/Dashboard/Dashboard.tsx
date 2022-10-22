import React from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import Section from "../../Components/Atoms/Section/Section";
import ProjectsPingList from "../../Components/Atoms/ProjectsPingList/ProjectsPingList";
import ActiveProgressProjectsList from "../../Components/Organism/ActiveProgressProjectsList/ActiveProgressProjectsList";
import { DashboardContainer } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <ActiveProgressProjectsList />
        </DashboardContainer>
        <DashboardContainer>
          <Section title="Projekty offline">
            <ProjectsPingList />
          </Section>
        </DashboardContainer>
      </PageContent>
    </PageBody>
  );
};

export default Dashboard;
