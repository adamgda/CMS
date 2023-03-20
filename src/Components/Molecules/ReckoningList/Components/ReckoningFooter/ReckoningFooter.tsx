import React from "react";
import { ReckoningFooterTypes } from "./ReckoningFooter.types";
import { ReckoningFooterStyled } from "./ReckoningFooter.styled";
import { numberWithCommas } from "../../../../../Helpers/StringHelpers";
import { SimpleButton } from "../../../../Atoms/Form/Button/Button.styled";

const ReckoningFooter = ({
  sum,
  deleteAll,
}: ReckoningFooterTypes): JSX.Element => {
  return (
    <ReckoningFooterStyled>
      <SimpleButton onClick={deleteAll}>Rozlicz wszystko</SimpleButton>
      <strong>{numberWithCommas(sum)} zł (net)</strong>
    </ReckoningFooterStyled>
  );
};

export default ReckoningFooter;
