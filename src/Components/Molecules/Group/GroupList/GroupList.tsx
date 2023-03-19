import React, { useEffect, useState } from "react";
import Section from "../../../Atoms/Section/Section";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import UserEditForm from "../GroupEditForm/GroupEditForm";
import Modal from "../../../../Hocs/Modal/Modal";
import { GetGroups } from "../../../../Services/GroupService";
import { GroupListTypes } from "./GroupList.types";
import { ModalDataTypes } from "../../../../Hocs/Modal/Modal.types";
import { SimpleButton } from "../../../Atoms/Form/Button/Button.styled";

const UserList = () => {
  const [groups, setGroups] = useState<Array<GroupListTypes>>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "groupEdit",
  });

  const getGroups = () => {
    GetGroups((res: any) => {
      setGroups(res?.data);
    });
  };

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
  };

  const showModal = (id: number | null, type: string): void => {
    setModalData({ show: true, data: id, type: type });
  };

  const callback = () => {
    closeModal();
    getGroups();
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Section title="Grupy">
      <>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Nazwa</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              return (
                <tr key={group.id}>
                  <td>{group.id}</td>
                  <td>{group.name}</td>
                  <td className="auto">
                    <a onClick={() => showModal(group.id, "edit")}>
                      <EditTwoToneIcon />
                    </a>
                  </td>
                </tr>
              );
            })}
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
          <span>Nowa grupa</span>
        </SimpleButton>
      </>
    </Section>
  );
};

export default UserList;
