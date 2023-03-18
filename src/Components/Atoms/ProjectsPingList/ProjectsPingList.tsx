import React from "react";
import { ProjectsPingListContainer } from "./ProjectsPingList.styled";
import Section from "../Section/Section";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";

const ProjectsPingList = () => {
  return (
    <Section title="Projekty offline">
      <ProjectsPingListContainer>
        <HandymanTwoToneIcon fontSize="large" />
      </ProjectsPingListContainer>
    </Section>
  );
};

export default ProjectsPingList;
