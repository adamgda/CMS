import React, { useEffect, useState } from "react";
import { Grid } from "@atom/Grid";
import { MainInput, FixedButton, FixedDeleteButton } from "@atom/Form";
import { TopBar } from "@molecule/TopBar";
import { Modal } from "@hoc/Modal";
import { UserEditFormTypes, UserFormTypes } from "./UserEditForm.types";
import { useForm } from "react-hook-form";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { MainButton } from "@atom/Form";
import {
  AddUser,
  DeleteUser,
  EditUserDetails,
  GetUserDetails,
} from "@service/UserService";
import { GroupListTypes } from "@organism/Group/GroupList";
import { GetGroups } from "@service/GroupService";

export const UserEditForm = ({
  id,
  callback,
}: UserEditFormTypes): JSX.Element => {
  const [, setGroups] = useState<GroupListTypes[]>([]);
  const [userData, setUserData] = useState<UserFormTypes | null>(null);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "delete",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormTypes>();

  const getUserData = async (): Promise<void> => {
    if (id) {
      await GetUserDetails(id, (data: UserFormTypes) => setUserData(data));
    }
  };

  const onSubmit = async (data: UserFormTypes): Promise<void> => {
    if (data) {
      if (id) {
        await EditUserDetails(id, data, () => callback());
      } else {
        await AddUser(data, () => callback());
      }
    }
  };

  const onDelete = async (): Promise<void> => {
    if (id) {
      await DeleteUser(id, () => {
        setModalData({ show: false, data: null, type: "delete" });
        callback();
      });
    }
  };

  const showDelete = (): void => {
    setModalData({ show: true, data: null, type: "delete" });
  };

  const getGroupsOptionsList = async (): Promise<void> => {
    await GetGroups((res: any) => {
      const data: Array<GroupListTypes> = res?.data;
      setGroups(data);
    });
  };

  useEffect(() => {
    void getGroupsOptionsList();
    void getUserData();
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
              isError={errors?.password}
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
                isError={errors?.groupId}
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
