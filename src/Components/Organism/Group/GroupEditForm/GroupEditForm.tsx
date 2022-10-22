import React, { useContext, useEffect, useState } from "react";
import Grid from "../../../Atoms/Grid/Grid";
import MainInput from "../../../Atoms/Form/Input/Input";
import TopBar from "../../../TopBar/TopBar";
import FixedButton from "../../../Atoms/Form/FixedButton/FixedButton";
import FixedDeleteButton from "../../../Atoms/Form/FixedDeleteButton/FixedDeleteButton";
import Modal from "../../../../Hocs/Modal/Modal";
import { LoaderContext } from "../../../../Contexts/LoaderContext";
import { useForm } from "react-hook-form";
import { ModalDataTypes } from "../../../../Hocs/Modal/Modal.types";
import { MainButton } from "../../../Atoms/Form/Button/Button.styled";
import { GroupEditFormTypes } from "./GroupEditForm.types";
import {
  AddGroup,
  DeleteGroup,
  EditGroupDetails,
  GetGroupDetails,
} from "../../../../Services/GroupService";

const GroupEditForm = ({ id, finishCallback }: GroupEditFormTypes) => {
  const [groupData, setGroupData] = useState<GroupEditFormTypes | null>(null);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "delete",
  });
  const loader = useContext(LoaderContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getGroupData = () => {
    if (id) {
      loader.show(true);
      GetGroupDetails(
        id,
        (data: GroupEditFormTypes) => setGroupData(data),
        () => loader.show(false)
      );
    }
  };

  const onSubmit = (data: GroupEditFormTypes) => {
    if (data) {
      loader.show(true);
      if (id) {
        EditGroupDetails(
          id,
          data,
          () => finishCallback(),
          () => loader.show(false)
        );
      } else {
        AddGroup(
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
      DeleteGroup(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
        finishCallback();
        loader.show(false);
      });
    }
  };

  const showDelete = () => {
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
            <MainInput label="Nazwa grupy" required isError={errors?.login}>
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

export default GroupEditForm;
