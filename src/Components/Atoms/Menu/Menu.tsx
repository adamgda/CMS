import React from "react";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from "@mui/icons-material/CreateNewFolderTwoTone";
import { MenuContainer } from "./Menu.styled";
import { NavLink } from "react-router-dom";
import { IsEditor } from "../../../Services/MeService";

const Menu = (): JSX.Element => {
  return (
    <MenuContainer>
      <ul>
        <li>
          <NavLink to="/">
            Dashboard <DashboardTwoToneIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projekty <FolderTwoToneIcon />
          </NavLink>
        </li>
        {IsEditor && (
          <li>
            <NavLink to="/new-project">
              Nowy projekt <CreateNewFolderTwoToneIcon />
            </NavLink>
          </li>
        )}
      </ul>
    </MenuContainer>
  );
};

export default Menu;
