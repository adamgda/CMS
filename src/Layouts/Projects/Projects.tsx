import React, { useContext, useEffect, useState } from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import ElementsList from "../../Components/List/ElementsList/ElementsList";
import Element from "../../Components/List/Element/Element";
import FixedButton from "../../Components/Atoms/Form/FixedButton/FixedButton";
import Modal from "../../Hocs/Modal/Modal";
import ProjectFullElement from "../../Components/Organism/Project/ProjectFullElement/ProjectFullElement";
import ProjectEditForm from "../../Components/Organism/Project/ProjectEditForm/ProjectEditForm";
import { ModalDataTypes } from "../../Hocs/Modal/Modal.types";
import { LoaderContext } from "../../Contexts/LoaderContext";
import { ElementData } from "../../Components/List/Element/Element.types";
import { GetUserData, IsAdmin, IsEditor } from "../../Services/AuthService";
import {
  GetAllProjects,
  GetProjectsByGroup,
} from "../../Services/ProjectService";

const Projects = () => {
  const [projects, setProjects] = useState<Array<ElementData>>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "",
  });

  const loader = useContext(LoaderContext);

  const goToProjectAddPage = (): void => {
    window.location.href = "/new-project";
  };

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
  };

  const showModal = (id: number | null, type: string): void => {
    setModalData({ show: true, data: id, type: type });
  };

  const getProjects = () => {
    loader.show(true);
    IsAdmin()
      ? GetAllProjects(
          (res: any) => setProjects(res?.data),
          () => loader.show(false)
        )
      : GetProjectsByGroup(
          GetUserData().group_id,
          (res: any) => setProjects(res?.data),
          () => loader.show(false)
        );
  };

  const finishCallback = () => {
    loader.show(true);
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
                showDetailsCallback={() => showModal(project?.id, "details")}
                showEditCallback={() => showModal(project?.id, "edit")}
              />
            );
          })}
        </ElementsList>
      </PageContent>
      {IsEditor() && <FixedButton type="new" callback={goToProjectAddPage} />}
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
            IsEditor() && (
              <Modal
                size="big"
                closeCallback={closeModal}
                padding={"1rem 2rem 2rem"}
              >
                <ProjectEditForm
                  id={modalData?.data}
                  finishCallback={finishCallback}
                />
              </Modal>
            )
          )}
        </>
      )}
    </PageBody>
  );
};

export default Projects;
