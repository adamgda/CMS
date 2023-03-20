import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { UserBarContainer } from "./UserBar.styled";
import { LogOut } from "../../../Services/AuthService";
import { NavLink } from "react-router-dom";
import { IsAdmin, MyLogin } from "../../../Services/MeService";

const UserBar = (): JSX.Element => {
  return (
    <UserBarContainer>
      <div>{MyLogin || "---"}</div>
      <div>
        {IsAdmin && (
          <NavLink to="/settings">
            <SettingsIcon />
          </NavLink>
        )}
        <a onClick={() => LogOut()}>
          <PowerSettingsNewIcon />
        </a>
      </div>
    </UserBarContainer>
  );
};

export default UserBar;
