import { Delete, Get, Post } from "./ApiService";
import { AxiosResponse } from "axios";
import { ReckoningResponseTypes } from "./ReckoningService.types";
import { ReckoningTypes } from "@molecule/ReckoningList/ReckoningList.types";

export const GetReckonings = (
  callback: Function
): Promise<AxiosResponse<ReckoningResponseTypes[]> | void> => {
  return Get(`/reckoning`, callback);
};

export const AddReckoning = (
  data: ReckoningTypes,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
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
