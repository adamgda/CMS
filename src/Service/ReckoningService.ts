import { Delete, Get, Post } from "./ApiService";
import { AxiosResponse } from "axios";
import { ReckoningTypes } from "@molecule/ReckoningList/ReckoningList.types";

export const GetReckonings = (
  callback: Function
): Promise<void | AxiosResponse<unknown, any>> => {
  return Get(`/reckoning`, callback);
};

export const AddReckoning = (
  data: ReckoningTypes,
  callback: Function
): Promise<void | AxiosResponse<unknown, any>> => {
  return Post(`/reckoning`, data, callback);
};

export const DeleteReckoning = (
  id: string,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Delete(`/reckoning/${id}`, callback);
};

export const DeleteAllReckoning = (
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Delete(`/reckoning/all`, callback);
};
