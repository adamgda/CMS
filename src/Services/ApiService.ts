import axios, { AxiosResponse } from "axios";
import { API_URL } from "../App.config";
import { toast } from "react-toastify";
import { ResponseTypes } from "./ApiService.types";

const isNotLoginPage = window.location.pathname !== "/#/login";

export const backToLogin = (): void => {
  window.location.replace("/#/login");
  sessionStorage.removeItem("user");
};

axios.interceptors.request.use(
  (config) => {
    if (
      !sessionStorage.getItem("token") &&
      isNotLoginPage &&
      config.method === "get"
    ) {
      backToLogin();
      Promise.reject();
    } else {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Catch = (res: ResponseTypes): void => {
  toast.error(res?.response?.data?.message);
  res?.response?.status === 401 && backToLogin();
};

export const Post = (
  url: string,
  data: unknown,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return axios
    .post(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => callback(res))
    .catch((res: ResponseTypes) => Catch(res));
};

export const Put = (
  url: string,
  data: unknown,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return axios
    .put(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => callback(res))
    .catch((res: ResponseTypes) => Catch(res));
};

export const Patch = (
  url: string,
  data: unknown,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return axios
    .patch(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => callback(res))
    .catch((res: ResponseTypes) => Catch(res));
};

export const Delete = (
  url: string,
  callback?: Function
): Promise<AxiosResponse<any> | void> => {
  return axios
    .delete(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => callback && callback(res))
    .catch((res: ResponseTypes) => Catch(res));
};

export const Get = (
  url: string,
  callback: Function,
  finallyCallback?: Function
): Promise<AxiosResponse<any> | void> => {
  return axios
    .get(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => callback(res))
    .catch((res: ResponseTypes) => Catch(res))
    .finally(() => finallyCallback && finallyCallback());
};
