import React, { useEffect, useState } from "react";
import { Section } from "@molecule/Section";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { UserEditForm } from "@organism/User";
import { Modal } from "@hoc/Modal";
import { GetUsers } from "@service/UserService";
import { UserListTypes } from "./UserList.types";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { SimpleButton } from "@atom/Form/Button/Button.styled";

export const UserList = () => {
  const [users, setUsers] = useState<Array<UserListTypes>>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "userEdit",
  });

  const getUsers = async (): Promise<void> => {
    await GetUsers((res: any) => {
      setUsers(res?.data);
    });
  };

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
  };

  const showModal = (id: number | null, type: string): void => {
    setModalData({ show: true, data: id, type: type });
  };

  const callback = async (): Promise<void> => {
    await getUsers();
    closeModal();
  };

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <Section title="Użytkownicy">
      <>
        <table>
          <thead>
            <tr>
              <td>Login</td>
              <td>E-mail</td>
              <td>Grupa (ID)</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>{user.email}</td>
                <td>{user.group_id}</td>
                <td className="auto">
                  <a onClick={() => showModal(user.id, "edit")}>
                    <EditTwoToneIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalData?.show && (
          <Modal
            size="big"
            closeCallback={closeModal}
            padding={"1rem 2rem 2rem"}
          >
            <UserEditForm id={modalData?.data} callback={callback} />
          </Modal>
        )}
        <SimpleButton type="submit" onClick={() => showModal(null, "add")}>
          <span>Nowy użytkownik</span>
        </SimpleButton>
      </>
    </Section>
  );
};
