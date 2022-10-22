import React, { useContext, useEffect, useState } from "react";
import Grid from "../../../Atoms/Grid/Grid";
import MainInput from "../../../Atoms/Form/Input/Input";
import TopBar from "../../../TopBar/TopBar";
import FixedButton from "../../../Atoms/Form/FixedButton/FixedButton";
import FixedDeleteButton from "../../../Atoms/Form/FixedDeleteButton/FixedDeleteButton";
import Modal from "../../../../Hocs/Modal/Modal";
import { UserEditFormTypes } from "./UserEditForm.types";
import { LoaderContext } from "../../../../Contexts/LoaderContext";
import { useForm } from "react-hook-form";
import { ModalDataTypes } from "../../../../Hocs/Modal/Modal.types";
import { MainButton } from "../../../Atoms/Form/Button/Button.styled";
import { UserFormTypes } from "../UserList/UserList.types";
import {
  AddUser,
  DeleteUser,
  EditUserDetails,
  GetUserDetails,
} from "../../../../Services/UserService";
import { GroupListTypes } from "../../Group/GroupList/GroupList.types";
import { GetGroups } from "../../../../Services/GroupService";

const UserEditForm = ({ id, finishCallback }: UserEditFormTypes) => {
  const [groups, setGroups] = useState<Array<GroupListTypes>>([]);
  const [userData, setUserData] = useState<UserFormTypes | null>(null);
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

  const getUserData = () => {
    if (id) {
      loader.show(true);
      GetUserDetails(
        id,
        (data: UserFormTypes) => setUserData(data),
        () => loader.show(false)
      );
    }
  };

  const onSubmit = (data: UserFormTypes) => {
    if (data) {
      loader.show(true);
      if (id) {
        EditUserDetails(
          id,
          data,
          () => finishCallback(),
          () => loader.show(false)
        );
      } else {
        AddUser(
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
      DeleteUser(id, () => {
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
    getGroupsOptionsList();
    getUserData();
  }, [id]);

  return (
    <>
      {(userData || !id) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {id ? (
            <TopBar title={`Edycja ${userData?.login || ""}`} margin="0" />
          ) : (
            <TopBar title="Nowy użytkownik" margin="0" />
          )}
          <Grid padding={"0 0 1rem"}>
            <MainInput
              label="Login użytkownika"
              required
              isError={errors?.login}
            >
              <input
                type="text"
                {...register("login", {
                  required: true,
                  value: userData?.login,
                })}
              />
            </MainInput>
            <MainInput
              label={`Hasło użytkownika (sugestia: ${Math.random()
                .toString(36)
                .slice(2, 14)})`}
              isError={errors?.name}
            >
              <input
                type="text"
                {...register("password", {
                  value: userData?.password,
                })}
              />
            </MainInput>
          </Grid>
          <Grid padding={"0 0 1rem"}>
            <MainInput
              label="E-mail użytkownika"
              required
              isError={errors?.email}
            >
              <input
                type="text"
                {...register("email", {
                  required: true,
                  value: userData?.email,
                })}
              />
            </MainInput>
            {!id && (
              <MainInput
                label="Grupa użytkownika (ID)"
                required
                isError={errors?.name}
              >
                <input
                  type="text"
                  {...register("groupId", {
                    required: true,
                    value: userData?.group_id,
                  })}
                />
              </MainInput>
            )}
          </Grid>
          <FixedButton type="save" noBorder />
          {id && id !== 1 && <FixedDeleteButton callback={showDelete} />}
        </form>
      )}
      {modalData?.show && modalData?.type === "delete" && id && (
        <Modal
          padding={"0 2rem 1rem"}
          closeCallback={() =>
            setModalData({ show: false, data: null, type: "delete" })
          }
        >
          <TopBar title={`Usunąć "${userData?.login}"?`} />
          <MainButton type="submit" onClick={() => onDelete()}>
            <span>Usuń użytkownika {userData?.login}</span>
          </MainButton>
        </Modal>
      )}
    </>
  );
};

export default UserEditForm;
