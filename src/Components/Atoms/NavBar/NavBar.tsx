import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import UserBar from "../UserBar/UserBar";
import { NavBarContainer, NavBarLogo } from "./NavBar.styles";

const NavBar = (): JSX.Element => {
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
