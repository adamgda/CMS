import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UserBarContainer, NavBarSwitch } from "./UserBar.styled";
import { LogOut } from "../../../Services/AuthService";
import { NavLink } from "react-router-dom";
import { IsAdmin, MyLogin } from "../../../Services/MeService";
import { UserBarTypes } from "./UserBar.types";

const UserBar = ({ switchCallback }: UserBarTypes): JSX.Element => {
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
        <NavBarSwitch onClick={switchCallback}>
          <MenuOutlinedIcon />
        </NavBarSwitch>
      </div>
    </UserBarContainer>
  );
};

export default UserBar;
