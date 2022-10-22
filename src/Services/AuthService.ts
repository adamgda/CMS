import { GetApi, PostApi } from "./ApiService";

const SetToken = (authToken: string) => {
  return sessionStorage.setItem("token", authToken);
};

const SetUserData = (data: any) => {
  return sessionStorage.setItem("user", data);
};

const afterLogin = async (res: any, callback: Function) => {
  console.log(res);
  await SetToken(res?.data?.authToken);
  await GetApi("/user", (res: any) => {
    SetUserData(JSON.stringify(res?.data[0]));
  });
  callback();
};

export const GetToken = () => {
  return sessionStorage.getItem("token");
};

export const Logout = () => {
  window.location.replace("/login");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const GetUserData = () => {
  return JSON.parse(sessionStorage.getItem("user") || "{}");
};

export const IsAdmin = () => {
  return GetUserData().is_admin;
};

export const IsEditor = () => {
  return GetUserData().group_id === 1 || IsAdmin();
};

export const SetLogin = (
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PostApi(
    `/login`,
    data,
    (res: any) => {
      return afterLogin(res, callback);
    },
    finallyCallback
  );
};
