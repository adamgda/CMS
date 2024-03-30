import React from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { ProjectsPingList, ActiveProjectsList } from "@organism/Project";
import { ReckoningList } from "@molecule/ReckoningList";
import { DashboardContainer } from "./Dashboard.styled";

export const Dashboard = (): JSX.Element => {
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
