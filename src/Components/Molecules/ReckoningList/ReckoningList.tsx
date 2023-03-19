import React, { useEffect, useState } from "react";
import ReckoningFooter from "./Components/ReckoningFooter/ReckoningFooter";
import ReckoningAddButton from "./Components/ReckoningAddButton/ReckoningAddButton";
import Section from "../../Atoms/Section/Section";
import Modal from "../../../Hocs/Modal/Modal";
import ReckoningAddForm from "./Components/ReckoningAddForm/ReckoningAddForm";
import CreditCardOffTwoToneIcon from "@mui/icons-material/CreditCardOffTwoTone";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import { numberWithCommas } from "../../../Helpers/StringHelpers";
import { ReckoningDataDataListStyled } from "./ReckoningDataDataList.styled";
import { ModalDataTypes } from "../../../Hocs/Modal/Modal.types";
import { ReckoningTypes } from "./ReckoningList.types";
import { ReckoningResponseTypes } from "../../../Services/ReckoningService.types";
import {
  AddReckoning,
  DeleteAllReckoning,
  DeleteReckoning,
  GetReckonings,
} from "../../../Services/ReckoningService";
import {
  ProgressListContainer,
  ProgressListElement,
} from "../../Atoms/ProgressList/ProgressList.styled";

const ReckoningList = (): JSX.Element => {
  const [reckonings, setReckonings] = useState<ReckoningResponseTypes[]>([]);
  const [modalData, setModalData] = useState<ModalDataTypes>({
    show: false,
    data: null,
    type: "reckoningAdd",
  });

  const getReckonings = () => {
    GetReckonings((res: any) => {
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
    DeleteReckoning(id, () => getReckonings());
  };

  const reckoningAdd = (data: ReckoningTypes): void => {
    AddReckoning(data, () => reckoningModalClose());
  };

  const clearReckoningList = (): void => {
    DeleteAllReckoning(() => reckoningModalClose());
  };

  const reckoningSum = (): string => {
    let sum = 0;
    reckonings.forEach((el) => {
      sum = sum + el.cost;
    });
    return sum.toString();
  };

  useEffect(() => {
    getReckonings();
  }, []);

  return (
    <Section
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

export default ReckoningList;
