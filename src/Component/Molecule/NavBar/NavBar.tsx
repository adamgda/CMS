import React, { useState } from "react";
import { Logo } from "@atom/Logo";
import { Menu } from "@atom/Menu";
import { UserBar } from "@molecule/UserBar";
import { NavBarContainer, NavBarLogo } from "./NavBar.styles";

export const NavBar = (): JSX.Element => {
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
