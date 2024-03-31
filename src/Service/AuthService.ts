import { backToLogin, Post } from "./ApiService";
import { AxiosResponse } from "axios";
import { LoginResponseData, LoginResponseTypes } from "./AuthService.types";
import { LoginTypes } from "@organism/Login/Login.types";

export const SetSessionData = (data: LoginResponseTypes): void | null => {
  if (!data) return null;
  sessionStorage.setItem("token", data.authToken);
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      isAdmin: data.isAdmin,
      groupId: data.groupId,
      login: data.login,
    })
  );
};

export const LogIn = (
  data: LoginTypes,
  callback: Function
): Promise<void | AxiosResponse<unknown, any>> => {
  return Post(`/login`, data, (res: LoginResponseData) => {
    SetSessionData(res.data);
    callback();
  });
};

export const LogOut = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  backToLogin();
};
