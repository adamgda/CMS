import React from "react";
import { UserBarContainer } from "./UserBar.styled";
import { GetUserData, Logout } from "../../../Services/AuthService";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const UserBar = () => {
  return (
    <UserBarContainer>
      <div>{GetUserData()?.login}</div>
      <div>
        {GetUserData()?.is_admin && (
          <NavLink to="/settings">
            <SettingsIcon />
          </NavLink>
        )}
        <a onClick={() => Logout()}>
          <PowerSettingsNewIcon />
        </a>
      </div>
    </UserBarContainer>
  );
};

export default UserBar;
