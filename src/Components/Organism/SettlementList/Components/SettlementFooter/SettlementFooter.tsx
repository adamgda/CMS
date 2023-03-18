import React from "react";
import { SettlementFooterTypes } from "./SettlementFooter.types";
import { SettlementFooterStyled } from "./SettlementFooter.styled";
import { numberWithCommas } from "../../../../../Helpers/StringHelpers";
import { SimpleButton } from "../../../../Atoms/Form/Button/Button.styled";

const SettlementFooter = ({ sum }: SettlementFooterTypes) => {
  return (
    <SettlementFooterStyled>
      <SimpleButton>wyczyść listę</SimpleButton>
      <strong>{numberWithCommas(sum)} zł</strong>
    </SettlementFooterStyled>
  );
};

export default SettlementFooter;
