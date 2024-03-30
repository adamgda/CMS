import React from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { UserList } from "@organism/User";
import { GroupList } from "@organism/Group";
import { RestrictAccess } from "@hoc/RestrictAccess";
import { DashboardContainer } from "@organism/Dashboard";

export const Settings = (): JSX.Element => {
  return (
    <RestrictAccess>
      <PageBody>
        <PageContent>
          <DashboardContainer>
            <UserList />
          </DashboardContainer>
          <DashboardContainer>
            <GroupList />
          </DashboardContainer>
        </PageContent>
      </PageBody>
    </RestrictAccess>
  );
};
