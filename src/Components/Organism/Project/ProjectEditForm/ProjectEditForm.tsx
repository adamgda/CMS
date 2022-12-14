import React, { useContext, useEffect, useState } from "react";
import Grid from "../../../Atoms/Grid/Grid";
import MainInput from "../../../Atoms/Form/Input/Input";
import TopBar from "../../../TopBar/TopBar";
import FixedButton from "../../../Atoms/Form/FixedButton/FixedButton";
import Modal from "../../../../Hocs/Modal/Modal";
import FixedDeleteButton from "../../../Atoms/Form/FixedDeleteButton/FixedDeleteButton";
import { ModalDataTypes } from "../../../../Hocs/Modal/Modal.types";
import { MainButton } from "../../../Atoms/Form/Button/Button.styled";
import { GetUserData, IsAdmin } from "../../../../Services/AuthService";
import { ProjectEditFormTypes } from "./ProjectEditForm.types";
import { LoaderContext } from "../../../../Contexts/LoaderContext";
import { useForm } from "react-hook-form";
import {
  AddProject,
  DeleteProject,
  EditProjectDetails,
  GetProjectDetails,
} from "../../../../Services/ProjectService";
import {
  ElementData,
  ProgressElement,
} from "../../../List/Element/Element.types";
import { GetGroups } from "../../../../Services/GroupService";
import { GroupListTypes } from "../../Group/GroupList/GroupList.types";

const ProjectEditForm = ({ id, finishCallback }: ProjectEditFormTypes) => {
  const [groups, setGroups] = useState<Array<GroupListTypes>>([]);
  const [projectData, setProjectData] = useState<ElementData | null>(null);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "",
  });
  const loader = useContext(LoaderContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getProjectData = () => {
    if (id) {
      loader.show(true);
      GetProjectDetails(
        id,
        (res: any) => setProjectData(res.data),
        () => loader.show(false)
      );
    }
  };

  const progressStringListToArray = (data: string): Array<ProgressElement> => {
    const progressArray: Array<ProgressElement> = [];
    const progressList = data.split("\n");
    const currentProgressList = projectData?.progress || [];

    progressList?.forEach((elString, i) => {
      const id = `${i}${elString.length}`;
      const currentEl = currentProgressList?.filter(
        (el) => el.label === elString
      )[0];

      progressArray.push({
        label: elString,
        id: currentEl ? currentEl.id : `${id}`,
        done: currentEl ? currentEl.done : false,
      });
    });
    return progressArray;
  };

  const progressArrayToStringList = (): string => {
    const names: Array<string> = [];

    projectData?.progress?.forEach((progress) => names.push(progress.label));
    return names.join("\r\n");
  };

  const onSubmit = (data: ElementData) => {
    if (data) {
      loader.show(true);
      data.progress = progressStringListToArray(data.progress.toString());
      data.groupId = IsAdmin() ? data.group_id : GetUserData().group_id;

      if (id) {
        EditProjectDetails(
          id,
          data,
          () => finishCallback(),
          () => loader.show(false)
        );
      } else {
        AddProject(
          data,
          () => finishCallback(),
          () => loader.show(false)
        );
      }
    }
  };

  const onDelete = () => {
    if (id) {
      loader.show(true);
      DeleteProject(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
        finishCallback();
        loader.show(false);
      });
    }
  };

  const showDelete = () => {
    setModalData({ show: true, data: null, type: "delete" });
  };

  const getGroupsOptionsList = () => {
    GetGroups(
      (res: any) => {
        const data: Array<GroupListTypes> = res?.data;
        setGroups(data);
      },
      () => null
    );
  };

  useEffect(() => {
    IsAdmin() && getGroupsOptionsList();
    getProjectData();
  }, [id]);

  return (
    <>
      {(projectData || !id) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {id && (
            <TopBar title={`Edycja ${projectData?.name || ""}`} margin="0" />
          )}
          <Grid padding={"0 0 1rem"}>
            <MainInput label="Nazwa projektu" required isError={errors?.name}>
              <input
                type="text"
                {...register("name", {
                  required: true,
                  value: projectData?.name,
                })}
              />
            </MainInput>
            <MainInput label="Adres projektu" required isError={errors?.link}>
              <input
                type="text"
                {...register("link", {
                  required: true,
                  value: projectData?.link,
                })}
              />
            </MainInput>
          </Grid>
          <Grid padding={"0 0 1rem"}>
            <MainInput
              label="Dost??py projektu"
              required
              isError={errors?.description}
            >
              <textarea
                {...register("description", {
                  required: true,
                  value: projectData?.description,
                })}
              />
            </MainInput>
          </Grid>
          <Grid padding={"0 0 1rem"}>
            <MainInput label="Lista modu????w (oddzielone enterem)">
              <textarea
                {...register("progress", {
                  value: progressArrayToStringList(),
                })}
              />
            </MainInput>
          </Grid>
          {IsAdmin() && (
            <Grid padding={"0 0 .25rem"}>
              <MainInput label="Grupa">
                <select
                  {...register("group_id", {
                    value: projectData?.group_id,
                  })}
                >
                  {groups.map((group) => (
                    <option value={group.id} key={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </MainInput>
            </Grid>
          )}
          <FixedButton type="save" noBorder />
          {id && <FixedDeleteButton callback={showDelete} />}
        </form>
      )}
      {modalData?.show && modalData?.type === "delete" && id && (
        <Modal
          padding={"0 2rem 1rem"}
          closeCallback={() =>
            setModalData({ show: false, data: null, type: "delete" })
          }
        >
          <TopBar title={`Usun???? "${projectData?.name}"?`} margin="1rem 0 0" />
          <MainButton type="submit" onClick={() => onDelete()}>
            <span>Usu?? projekt {projectData?.name}</span>
          </MainButton>
        </Modal>
      )}
    </>
  );
};

export default ProjectEditForm;
