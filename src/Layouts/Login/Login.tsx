import React, { useContext } from "react";
import Modal from "../../Hocs/Modal/Modal";
import Grid from "../../Components/Atoms/Grid/Grid";
import Logo from "../../Components/Atoms/Logo/Logo";
import MainInput from "../../Components/Atoms/Form/Input/Input";
import { useForm } from "react-hook-form";
import { MainButton } from "../../Components/Atoms/Form/Button/Button.styled";
import { LoginLogo, LoginPage } from "./Login.styled";
import { LoginTypes } from "./Login.types";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../../Contexts/LoaderContext";
import { SetLogin } from "../../Services/AuthService";

const Login = () => {
  const loader = useContext(LoaderContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: LoginTypes) => {
    loader.show(true);
    SetLogin(
      data,
      () => {
        navigate("/");
        window.location.reload();
      },
      () => loader.show(false)
    );
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
