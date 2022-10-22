import React from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import UserList from "../../Components/Organism/User/UserList/UserList";
import GroupList from "../../Components/Organism/Group/GroupList/GroupList";
import RestrictAccess from "../../Hocs/RestrictAccess/RestrictAccess";
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
