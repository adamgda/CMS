import React from "react";
import { Modal } from "@hoc/Modal";
import { Grid } from "@atom/Grid";
import { Logo } from "@atom/Logo";
import { MainInput } from "@atom/Form";
import { useForm } from "react-hook-form";
import { MainButton } from "@atom/Form/Button/Button.styled";
import { LoginLogo, LoginPage } from "./Login.styled";
import { LoginTypes } from "./Login.types";
import { useNavigate } from "react-router-dom";
import { LogIn } from "@service/AuthService";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginTypes>();

  const onSubmit = (data: LoginTypes): void => {
    void LogIn(data, () => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <LoginPage>
      <Modal lightBg withoutBg padding={"1.5rem 1.5rem .5rem"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginLogo>
            <Logo />
          </LoginLogo>
          <Grid>
            <MainInput label="LOGIN">
              <input {...register("login", { required: true })} />
            </MainInput>
            <MainInput label="HASŁO">
              <input
                {...register("password", { required: true })}
                type={"password"}
              />
            </MainInput>
          </Grid>
          <MainButton type="submit">
            <span>ZALOGUJ SIĘ</span>
          </MainButton>
        </form>
      </Modal>
    </LoginPage>
  );
};
