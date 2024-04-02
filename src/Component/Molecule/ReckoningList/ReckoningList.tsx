import React, { useEffect, useState } from "react";
import { ReckoningFooter } from "@molecule/ReckoningList";
import { ReckoningAddButton } from "@molecule/ReckoningList";
import { Section } from "@molecule/Section";
import { Modal } from "@hoc/Modal";
import { ReckoningAddForm } from "@molecule/ReckoningList";
import CreditCardOffTwoToneIcon from "@mui/icons-material/CreditCardOffTwoTone";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import { numberWithCommas } from "@helper/StringHelpers";
import { ReckoningDataDataListStyled } from "./ReckoningDataDataList.styled";
import { ModalDataTypes } from "@hoc/Modal/Modal.types";
import { ReckoningTypes } from "./ReckoningList.types";
import { ReckoningResponseTypes } from "@service/ReckoningService.types";
import {
  AddReckoning,
  DeleteAllReckoning,
  DeleteReckoning,
  GetReckonings,
} from "@service/ReckoningService";
import {
  ProgressListContainer,
  ProgressListElement,
} from "@atom/ProgressList/ProgressList.styled";

export const ReckoningList = (): JSX.Element => {
  const [reckonings, setReckonings] = useState<ReckoningResponseTypes[]>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "reckoningAdd",
  });

  const getReckonings = (): void => {
    void GetReckonings((res: any) => {
      setReckonings(res?.data);
    });
  };

  const reckoningModalShow = (): void => {
    setModalData({ show: true, data: null, type: "reckoningAdd" });
  };

  const reckoningModalClose = (): void => {
    setModalData({ show: false, data: null, type: "reckoningAdd" });
    getReckonings();
  };

  const reckoningDelete = (id: string): void => {
    void DeleteReckoning(id, () => getReckonings());
  };

  const reckoningAdd = (data: ReckoningTypes): void => {
    void AddReckoning(data, () => reckoningModalClose());
  };

  const clearReckoningList = (): void => {
    void DeleteAllReckoning(() => reckoningModalClose());
  };

  const reckoningSum = (): number => {
    let sum = 0;
    reckonings.forEach((el) => {
      sum = sum + el.cost;
    });
    return sum;
  };

  useEffect(() => {
    getReckonings();
  }, []);

  return (
    <Section
      mobileAutoWidth
      title="Rozliczenia"
      titleComponent={<ReckoningAddButton addCallback={reckoningModalShow} />}
    >
      <>
        <ReckoningDataDataListStyled>
          {reckonings?.length > 0 ? (
            <>
              <ProgressListContainer>
                <div>
                  {reckonings?.map((el) => (
                    <ProgressListElement
                      key={el.id}
                      className="progress"
                      onClick={() => reckoningDelete(el.id)}
                    >
                      <CheckBoxOutlineBlankTwoToneIcon />
                      <span>{el.name}</span>
                      <span className="sum">
                        {numberWithCommas(el.cost)} zł
                      </span>
                    </ProgressListElement>
                  ))}
                </div>
              </ProgressListContainer>
              <ReckoningFooter
                deleteAll={clearReckoningList}
                sum={reckoningSum()}
              />
            </>
          ) : (
            <CreditCardOffTwoToneIcon fontSize="large" />
          )}
        </ReckoningDataDataListStyled>
        {modalData?.show && (
          <Modal
            size="big"
            closeCallback={reckoningModalClose}
            padding={"1rem 2rem 2rem"}
          >
            <ReckoningAddForm addCallback={reckoningAdd} />
          </Modal>
        )}
      </>
    </Section>
  );
};
