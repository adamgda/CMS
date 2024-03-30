import React from "react";
import { SimpleButton } from "@atom/Form/Button/Button.styled";
import { ReckoningAddButtonTypes } from "./ReckoningAddButton.types";

export const ReckoningAddButton = ({
  addCallback,
}: ReckoningAddButtonTypes): JSX.Element => {
  return (
    <SimpleButton onClick={addCallback} className="titleButton">
      Dodaj
    </SimpleButton>
  );
};
