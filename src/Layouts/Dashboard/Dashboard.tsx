import React from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import ProjectsPingList from "../../Components/Atoms/ProjectsPingList/ProjectsPingList";
import ActiveProjectsList from "../../Components/Organism/Project/ActiveProjectsList/ActiveProjectsList";
import SettlementList from "../../Components/Organism/SettlementList/SettlementList";
import { DashboardContainer } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <ActiveProjectsList />
        </DashboardContainer>
        <DashboardContainer>
          <SettlementList />
          <ProjectsPingList />
        </DashboardContainer>
      </PageContent>
    </PageBody>
  );
};

export default Dashboard;
