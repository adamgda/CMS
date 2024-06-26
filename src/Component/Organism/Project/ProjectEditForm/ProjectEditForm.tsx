import React, { useEffect, useState } from "react";
import { Grid } from "@atom/Grid";
import { MainInput, FixedDeleteButton, MainButton } from "@atom/Form";
import { TopBar } from "@molecule/TopBar";
import { FixedButton } from "@atom/Form/FixedButton";
import { Modal } from "@hoc/Modal";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { ProjectEditFormTypes } from "./ProjectEditForm.types";
import { useForm } from "react-hook-form";
import {
  AddProject,
  DeleteProject,
  EditProjectDetails,
  GetProjectDetails,
} from "@service/ProjectService";
import { ElementData, ElementFetchData } from "@molecule/Element/Element.types";
import { GetGroups } from "@service/GroupService";
import { GroupListTypes } from "@organism/Group/GroupList";
import { IsAdmin } from "@service/MeService";
import {
  ProjectProgressTypes,
  ProjectResponseTypes,
} from "@service/ProjectService.types";

export const ProjectEditForm = ({
  id,
  callback,
}: ProjectEditFormTypes): JSX.Element => {
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
  } = useForm<ProjectResponseTypes>();

  const getProjectData = async (): Promise<void> => {
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
    const names: string[] = [];

    projectData?.progress?.forEach((progress) => names.push(progress.label));
    return names.join("\r\n");
  };

  const onSubmit = async (data: ProjectResponseTypes): Promise<void> => {
    if (data) {
      data.progress = progressStringListToArray(data.progress.toString());

      if (id) {
        await EditProjectDetails(id, data, () => callback());
      } else {
        await AddProject(data, () => callback());
      }
    }
  };

  const onDelete = async (): Promise<void> => {
    if (id) {
      await DeleteProject(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
      });
    }
  };

  const showDelete = (): void => {
    setModalData({ show: true, data: null, type: "delete" });
  };

  const getGroupsOptionsList = async (): Promise<void> => {
    await GetGroups((res: any) => {
      const data: Array<GroupListTypes> = res?.data;
      reset({ groupId: data[0].id.toString() });
      setGroups(data);
    });
  };

  useEffect(() => {
    IsAdmin && getGroupsOptionsList();
    void getProjectData();
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
              label="Dostępy projektu"
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
            <MainInput label="Lista modułów (oddzielone enterem)">
              <textarea
                {...register("progress", {
                  // @ts-ignore
                  value: progressArrayToStringList(),
                })}
              />
            </MainInput>
          </Grid>
          {IsAdmin && (
            <Grid padding={"0 0 .25rem"}>
              <MainInput label="Grupa">
                <select
                  {...register("groupId", {
                    value: projectData?.groupId,
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
