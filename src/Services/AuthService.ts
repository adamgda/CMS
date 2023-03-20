import { backToLogin, Post } from "./ApiService";
import { AxiosResponse } from "axios";
import { LoginResponseTypes } from "./AuthService.types";

export const SetSessionData = (data: LoginResponseTypes): void => {
  sessionStorage.setItem("token", data?.authToken);
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      isAdmin: data?.isAdmin,
      groupId: data?.groupId,
      login: data?.login,
    })
  );
};

export const LogIn = (
  data: unknown,
  callback: Function
): Promise<AxiosResponse<LoginResponseTypes> | void> => {
  return Post(`/login`, data, (res: any) => {
    SetSessionData(res?.data);
    callback();
  });
};

export const LogOut = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  backToLogin();
};
