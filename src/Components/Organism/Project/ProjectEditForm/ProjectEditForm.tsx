import React, { useEffect, useState } from "react";
import Grid from "../../../Atoms/Grid/Grid";
import MainInput from "../../../Atoms/Form/Input/Input";
import TopBar from "../../../TopBar/TopBar";
import FixedButton from "../../../Atoms/Form/FixedButton/FixedButton";
import Modal from "../../../../Hocs/Modal/Modal";
import FixedDeleteButton from "../../../Atoms/Form/FixedDeleteButton/FixedDeleteButton";
import { ModalDataTypes } from "../../../../Hocs/Modal/Modal.types";
import { MainButton } from "../../../Atoms/Form/Button/Button.styled";
import { ProjectEditFormTypes } from "./ProjectEditForm.types";
import { useForm } from "react-hook-form";
import {
  AddProject,
  DeleteProject,
  EditProjectDetails,
  GetProjectDetails,
} from "../../../../Services/ProjectService";
import {
  ElementData,
  ElementFetchData,
} from "../../../List/Element/Element.types";
import { GetGroups } from "../../../../Services/GroupService";
import { GroupListTypes } from "../../Group/GroupList/GroupList.types";
import { IsAdmin, MyGroupId } from "../../../../Services/MeService";
import {
  ProjectProgressTypes,
  ProjectResponseTypes,
} from "../../../../Services/ProjectService.types";

const ProjectEditForm = ({ id, callback }: ProjectEditFormTypes) => {
  const [groups, setGroups] = useState<GroupListTypes[]>([]);
  const [projectData, setProjectData] = useState<ElementData>();
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getProjectData = async () => {
    if (id) {
      await GetProjectDetails(id, (res: ElementFetchData) =>
        setProjectData(res.data)
      );
    }
  };

  const progressStringListToArray = (data: string): ProjectProgressTypes[] => {
    if (data === "") return [];

    const progressArray: ProjectProgressTypes[] = [];
    const progressList = data.split("\n");
    const currentProgressList = projectData?.progress || [];

    progressList?.forEach((elString, i) => {
      const id = `${i}${elString.length}`;
      const currentEl = currentProgressList?.filter(
        (el) => el.label === elString
      )[0];

      progressArray.push({
        label: elString,
        id: currentEl?.id || `${id}`,
        done: currentEl?.done || false,
      });
    });
    return progressArray;
  };

  const progressArrayToStringList = (): string => {
    const names: Array<string> = [];

    projectData?.progress?.forEach((progress) => names.push(progress.label));
    return names.join("\r\n");
  };

  const onSubmit = async (data: ProjectResponseTypes) => {
    if (data) {
      data.progress = progressStringListToArray(data.progress.toString());
      data.group_id = IsAdmin ? data.group_id : MyGroupId;

      if (id) {
        await EditProjectDetails(id, data, () => callback());
      } else {
        await AddProject(data, () => callback());
      }
    }
  };

  const onDelete = async () => {
    if (id) {
      await DeleteProject(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
      });
    }
  };

  const showDelete = () => {
    setModalData({ show: true, data: null, type: "delete" });
  };

  const getGroupsOptionsList = async () => {
    await GetGroups((res: any) => {
      const data: Array<GroupListTypes> = res?.data;
      reset({ groupId: data[0].id.toString() });
      setGroups(data);
    });
  };

  useEffect(() => {
    IsAdmin && getGroupsOptionsList();
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
            <MainInput label="Dostępy projektu" isError={errors?.description}>
              <textarea
                {...register("description", {
                  value: projectData?.description,
                })}
              />
            </MainInput>
          </Grid>
          <Grid padding={"0 0 1rem"}>
            <MainInput label="Lista modułów (oddzielone enterem)">
              <textarea
                {...register("progress", {
                  value: progressArrayToStringList(),
                })}
              />
            </MainInput>
          </Grid>
          {IsAdmin && (
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
          <TopBar title={`Usunąć "${projectData?.name}"?`} margin="1rem 0 0" />
          <MainButton type="submit" onClick={() => onDelete()}>
            <span>Usuń projekt {projectData?.name}</span>
          </MainButton>
        </Modal>
      )}
    </>
  );
};

export default ProjectEditForm;
