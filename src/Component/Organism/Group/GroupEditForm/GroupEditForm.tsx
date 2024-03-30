import React, { useEffect, useState } from "react";
import { Grid } from "@atom/Grid/Grid";
import { MainInput } from "@atom/Form/Input";
import { TopBar } from "@molecule/TopBar";
import { FixedButton } from "@atom/Form/FixedButton";
import { FixedDeleteButton } from "@atom/Form/FixedDeleteButton";
import { Modal } from "@hoc/Modal";

import { useForm } from "react-hook-form";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { MainButton } from "@atom/Form/Button/Button.styled";
import { GroupEditFormTypes } from "./GroupEditForm.types";
import {
  AddGroup,
  DeleteGroup,
  EditGroupDetails,
  GetGroupDetails,
} from "@service/GroupService";
import { GroupResponseTypes } from "@service/GroupService.types";

export const GroupEditForm = ({
  id,
  callback,
}: GroupEditFormTypes): JSX.Element => {
  const [groupData, setGroupData] = useState<GroupResponseTypes>();
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "delete",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupResponseTypes>();

  const getGroupData = (): void => {
    if (id) {
      void GetGroupDetails(id, (data: GroupResponseTypes) =>
        setGroupData(data)
      );
    }
  };

  const onSubmit = (data: GroupResponseTypes): void => {
    if (data) {
      if (id) {
        void EditGroupDetails({ id: data.id, ...data }, () => callback());
      } else {
        void AddGroup(data, () => callback());
      }
    }
  };

  const onDelete = (): void => {
    if (id) {
      void DeleteGroup(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
        callback();
      });
    }
  };

  const showDelete = (): void => {
    setModalData({ show: true, data: null, type: "delete" });
  };

  useEffect(() => {
    getGroupData();
  }, [id]);

  return (
    <>
      {(groupData || !id) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {id ? (
            <TopBar title={`Edycja ${groupData?.name || ""}`} margin="0" />
          ) : (
            <TopBar title="Nowa grupa" margin="0" />
          )}
          <Grid padding={"0 0 1rem"}>
            <MainInput label="Nazwa grupy" required isError={errors?.name}>
              <input
                type="text"
                {...register("name", {
                  required: true,
                  value: groupData?.name,
                })}
              />
            </MainInput>
          </Grid>
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
          <TopBar title={`Usunąć "${groupData?.name}"?`} />
          <MainButton type="submit" onClick={() => onDelete()}>
            <span>Usuń grupę</span>
          </MainButton>
        </Modal>
      )}
    </>
  );
};
