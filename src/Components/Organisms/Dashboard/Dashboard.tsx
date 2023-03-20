import React from "react";
import PageBody from "../../../Hocs/PageBody/PageBody";
import PageContent from "../../../Hocs/PageContent/PageContent";
import ProjectsPingList from "../../Atoms/ProjectsPingList/ProjectsPingList";
import ActiveProjectsList from "../../Molecules/Project/ActiveProjectsList/ActiveProjectsList";
import ReckoningList from "../../Molecules/ReckoningList/ReckoningList";
import { DashboardContainer } from "./Dashboard.styled";

const Dashboard = (): JSX.Element => {
  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <ActiveProjectsList />
        </DashboardContainer>
        <DashboardContainer>
          <ReckoningList />
          <ProjectsPingList />
        </DashboardContainer>
      </PageContent>
    </PageBody>
  );
};

export default Dashboard;
