import React from "react";
import PageBody from "../../../Hocs/PageBody/PageBody";
import PageContent from "../../../Hocs/PageContent/PageContent";
import UserList from "../../Molecules/User/UserList/UserList";
import GroupList from "../../Molecules/Group/GroupList/GroupList";
import RestrictAccess from "../../../Hocs/RestrictAccess/RestrictAccess";
import { DashboardContainer } from "../Dashboard/Dashboard.styled";

const Settings = () => {
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

export default Settings;
