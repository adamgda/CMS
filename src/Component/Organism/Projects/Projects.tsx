import React, { useEffect, useState } from "react";
import { PageBody } from "@hoc/PageBody";
import { PageContent } from "@hoc/PageContent";
import { ElementsList } from "@atom/Element";
import { Element } from "@molecule/Element";
import { FixedButton } from "@atom/Form";
import { Modal } from "@hoc/Modal";
import { ProjectFullElement, ProjectEditForm } from "@organism/Project";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { ElementData } from "@molecule/Element/Element.types";
import { GetProjects } from "@service/ProjectService";
import { useNavigate } from "react-router-dom";
import { IsEditor } from "@service/MeService";

export const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<Array<ElementData>>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "",
  });

  const navigate = useNavigate();

  const goToProjectAddPage = (): void => {
    navigate("/new-project");
  };

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
  };

  const goToProjectDetailsPage = (id: number): void => {
    id && navigate(`/projects/${id}`);
  };

  const getProjects = async (): Promise<void> => {
    await GetProjects((res: any) => setProjects(res?.data));
  };

  const callback = (): void => {
    closeModal();
    void getProjects();
  };

  useEffect(() => {
    void getProjects();
  }, []);

  return (
    <PageBody>
      <PageContent>
        <ElementsList>
          {projects?.map((project) => {
            return (
              <Element
                key={project?.id}
                title={project?.name}
                progress={project?.progress}
                link={project?.link}
                showDetailsCallback={() =>
                  project?.id && goToProjectDetailsPage(project?.id)
                }
              />
            );
          })}
        </ElementsList>
      </PageContent>
      {IsEditor && <FixedButton type="new" callback={goToProjectAddPage} />}
      {modalData?.show && (
        <>
          {modalData?.type === "details" ? (
            <Modal
              size="big"
              closeCallback={closeModal}
              padding={"1rem 2rem 2rem"}
            >
              <ProjectFullElement id={modalData?.data} />
            </Modal>
          ) : (
            IsEditor && (
              <Modal
                size="big"
                closeCallback={closeModal}
                padding={"1rem 2rem 2rem"}
              >
                <ProjectEditForm id={modalData?.data} callback={callback} />
              </Modal>
            )
          )}
        </>
      )}
    </PageBody>
  );
};
