import React from "react";
import MainInput from "../Input/Input";
import { SearchBarContainer } from "./SearchBar.styled";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";

const SearchBar = () => {
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
