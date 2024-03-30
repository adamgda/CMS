import React, { useEffect, useState } from "react";
import { Section } from "@molecule/Section";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { GroupEditForm } from "@organism/Group";
import { Modal } from "@hoc/Modal";
import { GetGroups } from "@service/GroupService";
import { GroupListTypes } from "@organism/Group/GroupList";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { SimpleButton } from "@atom/Form/Button/Button.styled";

export const GroupList = (): JSX.Element => {
  const [groups, setGroups] = useState<Array<GroupListTypes>>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "groupEdit",
  });

  const getGroups = (): void => {
    void GetGroups((res: any) => {
      setGroups(res?.data);
    });
  };

  const closeModal = (): void => {
    setModalData({ show: false, data: null, type: "" });
  };

  const showModal = (id: number | null, type: string): void => {
    setModalData({ show: true, data: id, type: type });
  };

  const callback = (): void => {
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
            <GroupEditForm id={modalData?.data} callback={callback} />
          </Modal>
        )}
        <SimpleButton type="submit" onClick={() => showModal(null, "add")}>
          <span>Nowa grupa</span>
        </SimpleButton>
      </>
    </Section>
  );
};
