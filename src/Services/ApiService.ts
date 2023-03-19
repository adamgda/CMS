import axios, { AxiosResponse } from "axios";
import { API_URL } from "../App.config";
import { toast } from "react-toastify";
import { ResponseTypes } from "./ApiService.types";

const Catch = (res: ResponseTypes) => {
  toast.error(res?.response?.data?.message);
  res?.response?.status === 401 &&
    window.location.pathname !== "/#/login" &&
    window.location.replace("/#/login");
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
