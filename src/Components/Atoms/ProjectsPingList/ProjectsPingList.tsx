import React from "react";
import Section from "../Section/Section";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";
import { ProjectsPingListContainer } from "./ProjectsPingList.styled";

const ProjectsPingList = (): JSX.Element => {
  return (
    <Section title="Projekty offline">
      <ProjectsPingListContainer>
        <HandymanTwoToneIcon fontSize="large" />
      </ProjectsPingListContainer>
    </Section>
  );
};

export default ProjectsPingList;
