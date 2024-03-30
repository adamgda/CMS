import React, { useState } from "react";
import { MainInput, FixedButton } from "@atom/Form";
import { Grid } from "@atom/Grid";
import { TopBar } from "@molecule/TopBar";
import { ReckoningAddFormTypes } from "./ReckoningAddForm.types";
import { useForm } from "react-hook-form";
import { ReckoningTypes } from "../../ReckoningList.types";

export const ReckoningAddForm = ({
  addCallback,
}: ReckoningAddFormTypes): JSX.Element => {
  const [reckoningData] = useState<ReckoningTypes | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReckoningTypes>();

  const onSubmit = async (data: ReckoningTypes): Promise<void> => {
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
              value: reckoningData?.name,
            })}
          />
        </MainInput>
        <MainInput label="Kwota (net)" required isError={errors?.cost}>
          <input
            type="number"
            {...register("cost", {
              required: true,
              value: reckoningData?.cost,
            })}
          />
        </MainInput>
      </Grid>
      <FixedButton type="save" noBorder />
    </form>
  );
};
