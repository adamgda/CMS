import React, { useState } from "react";
import MainInput from "../../../../Atoms/Form/Input/Input";
import Grid from "../../../../Atoms/Grid/Grid";
import TopBar from "../../../TopBar/TopBar";
import FixedButton from "../../../../Atoms/Form/FixedButton/FixedButton";
import { ReckoningAddFormTypes } from "./ReckoningAddForm.types";
import { useForm } from "react-hook-form";
import { ReckoningTypes } from "../../ReckoningList.types";

const ReckoningAddForm = ({ addCallback }: ReckoningAddFormTypes) => {
  const [reckoningtData, setReckoningtDataData] =
    useState<ReckoningTypes | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: ReckoningTypes) => {
    console.log(data);
    data && addCallback && addCallback(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TopBar title="Nowe rozliczenie" margin="0" />
      <Grid padding={"0 0 1rem"}>
        <MainInput label="Opis" required isError={errors?.name}>
          <input
            type="text"
            {...register("name", {
              required: true,
              value: reckoningtData?.name,
            })}
          />
        </MainInput>
        <MainInput label="Kwota (net)" required isError={errors?.cost}>
          <input
            type="number"
            {...register("cost", {
              required: true,
              value: reckoningtData?.cost,
            })}
          />
        </MainInput>
      </Grid>
      <FixedButton type="save" noBorder />
    </form>
  );
};

export default ReckoningAddForm;
