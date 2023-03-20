import React from "react";
import MainInput from "../Input/Input";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import { SearchBarContainer } from "./SearchBar.styled";

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarContainer>
      <MainInput small={true}>
        <input type={"text"} placeholder={"Szukaj"} />
      </MainInput>
      <a>
        <ManageSearchTwoToneIcon />
      </a>
    </SearchBarContainer>
  );
};

export default SearchBar;
