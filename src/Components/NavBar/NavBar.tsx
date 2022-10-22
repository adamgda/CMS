import React from "react";
import { NavBarContainer, NavBarLogo } from "./NavBar.styles";
import Logo from "../Atoms/Logo/Logo";
import Menu from "../Atoms/Menu/Menu";
import UserBar from "../Atoms/UserBar/UserBar";

const NavBar = () => {
  return (
    <NavBarContainer>
      <div>
        <NavBarLogo>
          <Logo size={"2rem"} />
        </NavBarLogo>
        <Menu />
        <UserBar />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
