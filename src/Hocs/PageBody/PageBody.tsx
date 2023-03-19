import React from "react";
import { PageBodyContainer, PageBodyContent } from "./PageBody.styled";
import { PageBodyTypes } from "./PageBody.types";
import NavBar from "../../Components/Atoms/NavBar/NavBar";

const PageBody = ({ children }: PageBodyTypes) => {
  return (
    <PageBodyContainer>
      <NavBar />
      <PageBodyContent>{children}</PageBodyContent>
    </PageBodyContainer>
  );
};

export default PageBody;
