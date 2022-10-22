import React from "react";
import { PageContentContainer } from "./PageContent.styled";
import { PageContentTypes } from "./PageContent.types";

const PageContent = ({ children }: PageContentTypes) => {
  return (
    <PageContentContainer>
      <div>{children}</div>
    </PageContentContainer>
  );
};

export default PageContent;
