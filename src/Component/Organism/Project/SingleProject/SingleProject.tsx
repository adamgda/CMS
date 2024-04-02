import React, { useState } from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { ProjectFullElement, ProjectEditForm } from "@organism/Project";
import { Modal } from "@hoc/Modal";
import { Section } from "@molecule/Section";
import { FixedButton } from "@atom/Form";
import { DashboardContainer } from "@organism/Dashboard";
import { useParams } from "react-router-dom";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { IsEditor } from "@service/MeService";

export const SingleProject = (): JSX.Element => {
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
          <Section mobileAutoWidth title={"Szczegóły projektu"}>
            {projectId ? <ProjectFullElement id={projectId} /> : <div />}
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
