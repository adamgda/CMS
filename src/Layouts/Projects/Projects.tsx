import React, { useEffect, useState } from "react";
import PageBody from "../../Hocs/PageBody/PageBody";
import PageContent from "../../Hocs/PageContent/PageContent";
import ElementsList from "../../Components/List/ElementsList/ElementsList";
import Element from "../../Components/List/Element/Element";
import FixedButton from "../../Components/Atoms/Form/FixedButton/FixedButton";
import Modal from "../../Hocs/Modal/Modal";
import ProjectFullElement from "../../Components/Organism/Project/ProjectFullElement/ProjectFullElement";
import ProjectEditForm from "../../Components/Organism/Project/ProjectEditForm/ProjectEditForm";
import { ModalDataTypes } from "../../Hocs/Modal/Modal.types";
import { ElementData } from "../../Components/List/Element/Element.types";
import { GetProjects } from "../../Services/ProjectService";
import { useNavigate } from "react-router-dom";
import { IsEditor } from "../../Services/MeService";

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
    navigate(`/projects/${id}`);
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
                showDetailsCallback={() => goToProjectDetailsPage(project?.id)}
                showEditCallback={() => console.log(project?.id, "edit")}
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
