import React from "react";
import { SimpleButton } from "../../../../Atoms/Form/Button/Button.styled";
import { ReckoningAddButtonTypes } from "./ReckoningAddButton.types";

const ReckoningAddButton = ({
  addCallback,
}: ReckoningAddButtonTypes): JSX.Element => {
  return (
    <SimpleButton onClick={addCallback} className="titleButton">
      Dodaj
    </SimpleButton>
  );
};

export default ReckoningAddButton;
