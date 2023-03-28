import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import UserBar from "../UserBar/UserBar";
import { NavBarContainer, NavBarLogo } from "./NavBar.styles";

const NavBar = (): JSX.Element => {
  const [navBarShow, setNavBarShow] = useState(false);

  return (
    <NavBarContainer className={navBarShow ? "show" : "hide"}>
      <div>
        <NavBarLogo>
          <Logo size={"2rem"} />
        </NavBarLogo>
        <Menu />
        <UserBar switchCallback={() => setNavBarShow(!navBarShow)} />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
