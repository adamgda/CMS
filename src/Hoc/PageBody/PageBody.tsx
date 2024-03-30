import React from "react";
import { PageBodyContainer, PageBodyContent } from "./PageBody.styled";
import { PageBodyTypes } from "./PageBody.types";
import { NavBar } from "@molecule/NavBar";

export const PageBody = ({ children }: PageBodyTypes) => {
  return (
    <PageBodyContainer>
      <NavBar />
      <PageBodyContent>{children}</PageBodyContent>
    </PageBodyContainer>
  );
};
