import React from "react";
import { TopBarContainer } from "./TopBar.styled";
import SearchBar from "../../Atoms/Form/SearchBar/SearchBar";
import { TopBarTypes } from "./TopBar.types";

const TopBar = ({ title, withSearchBar = false, margin }: TopBarTypes) => {
  return (
    <TopBarContainer margin={margin}>
      <h1>{title}</h1>
      {withSearchBar && <SearchBar />}
    </TopBarContainer>
  );
};

export default TopBar;
