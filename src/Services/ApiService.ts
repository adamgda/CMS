import axios from "axios";
import { API_URL } from "../App.config";
import { toast } from "react-toastify";
import { GetToken } from "./AuthService";

const catchService = (res: any) => {
  toast.error(res?.response?.data?.message);
  res?.response?.status === 401 &&
    window.location.pathname !== "/login" &&
    window.location.replace("/login");
};

export const PostApi = (
  url: string,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return axios
    .post(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    })
    .then((res) => callback(res))
    .catch((res) => catchService(res))
    .finally(() => finallyCallback());
};

export const PutApi = (
  url: string,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return axios
    .put(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    })
    .then((res) => callback(res))
    .catch((res) => catchService(res))
    .finally(() => finallyCallback());
};

export const PatchApi = (
  url: string,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return axios
    .patch(`${API_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    })
    .then((res) => callback(res))
    .catch((res) => catchService(res))
    .finally(() => finallyCallback());
};

export const DeleteApi = (url: string, finallyCallback: Function) => {
  return axios
    .delete(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    })
    .finally(() => finallyCallback());
};

export const GetApi = (
  url: string,
  callback: Function,
  finallyCallback?: Function
) => {
  return axios
    .get(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    })
    .then((res) => callback(res))
    .catch((res) => catchService(res))
    .finally(() => finallyCallback && finallyCallback());
};
