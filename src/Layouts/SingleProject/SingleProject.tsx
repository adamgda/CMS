import React, { useState } from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import ProjectFullElement from "../../Components/Organism/Project/ProjectFullElement/ProjectFullElement";
import Modal from "../../Hocs/Modal/Modal";
import ProjectEditForm from "../../Components/Organism/Project/ProjectEditForm/ProjectEditForm";
import Section from "../../Components/Atoms/Section/Section";
import { DashboardContainer } from "../Dashboard/Dashboard.styled";
import { useParams } from "react-router-dom";
import { ModalDataTypes } from "../../Hocs/Modal/Modal.types";
import FixedButton from "../../Components/Atoms/Form/FixedButton/FixedButton";
import { IsEditor } from "../../Services/MeService";

const SingleProject = () => {
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "",
  });
  const { id } = useParams();
  const projectId = id && parseInt(id);

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
    window.location.reload();
  };

  const showEditModal = (): void => {
    setModalData({ show: true, data: null, type: "" });
  };

  return (
    <PageBody>
      <PageContent>
        <DashboardContainer>
          <Section title={"Szczegóły projektu"}>
            {projectId ? <ProjectFullElement id={projectId} /> : <></>}
          </Section>
        </DashboardContainer>
      </PageContent>
      {IsEditor && projectId && modalData.show && (
        <Modal size="big" closeCallback={closeModal} padding={"1rem 2rem 2rem"}>
          <ProjectEditForm id={projectId} callback={closeModal} />
        </Modal>
      )}
      {IsEditor && !modalData.show && (
        <FixedButton type="edit" callback={showEditModal} />
      )}
    </PageBody>
  );
};

export default SingleProject;
