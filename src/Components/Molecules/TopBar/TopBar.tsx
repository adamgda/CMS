import React from "react";
import SearchBar from "../../Atoms/Form/SearchBar/SearchBar";
import { TopBarTypes } from "./TopBar.types";
import { TopBarContainer } from "./TopBar.styled";

const TopBar = ({
  title,
  withSearchBar = false,
  margin,
}: TopBarTypes): JSX.Element => {
  return (
    <TopBarContainer margin={margin}>
      <h1>{title}</h1>
      {withSearchBar && <SearchBar />}
    </TopBarContainer>
  );
};

export default TopBar;
