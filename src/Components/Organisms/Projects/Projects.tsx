import React, { useEffect, useState } from "react";
import PageBody from "../../../Hocs/PageBody/PageBody";
import PageContent from "../../../Hocs/PageContent/PageContent";
import ElementsList from "../../Molecules/ElementsList/ElementsList";
import Element from "../../Molecules/Element/Element";
import FixedButton from "../../Atoms/Form/FixedButton/FixedButton";
import Modal from "../../../Hocs/Modal/Modal";
import ProjectFullElement from "../../Molecules/Project/ProjectFullElement/ProjectFullElement";
import ProjectEditForm from "../../Molecules/Project/ProjectEditForm/ProjectEditForm";
import { ModalDataTypes } from "../../../Hocs/Modal/Modal.types";
import { ElementData } from "../../Molecules/Element/Element.types";
import { GetProjects } from "../../../Services/ProjectService";
import { useNavigate } from "react-router-dom";
import { IsEditor } from "../../../Services/MeService";

const Projects = () => {
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
    getProjects();
  };

  useEffect(() => {
    getProjects();
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

export default Projects;
