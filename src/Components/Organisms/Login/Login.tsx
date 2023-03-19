import React from "react";
import Modal from "../../../Hocs/Modal/Modal";
import Grid from "../../Atoms/Grid/Grid";
import Logo from "../../Atoms/Logo/Logo";
import MainInput from "../../Atoms/Form/Input/Input";
import { useForm } from "react-hook-form";
import { MainButton } from "../../Atoms/Form/Button/Button.styled";
import { LoginLogo, LoginPage } from "./Login.styled";
import { LoginTypes } from "./Login.types";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../../Services/AuthService";

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginTypes>();

  const onSubmit = (data: LoginTypes) => {
    return LogIn(data, () => {
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

export default Login;
