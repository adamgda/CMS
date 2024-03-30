import React from "react";
import { SearchBar } from "@atom/Form";
import { TopBarTypes } from "./TopBar.types";
import { TopBarContainer } from "./TopBar.styled";

export const TopBar = ({
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
