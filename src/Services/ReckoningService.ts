import { Delete, Get, Post, Patch } from "./ApiService";
import { AxiosResponse } from "axios";
import { ReckoningResponseTypes } from "./ReckoningService.types";
import { ReckoningTypes } from "../Components/Molecules/ReckoningList/ReckoningList.types";

export const GetReckonings = (
  callback: Function
): Promise<AxiosResponse<ReckoningResponseTypes[]> | void> => {
  return Get(`/reckoning`, callback);
};

export const AddReckoning = (
  data: ReckoningTypes,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return Post(`/reckoning`, data, callback);
};

export const DeleteReckoning = (
  id: string,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return Delete(`/reckoning/${id}`, callback);
};

export const DeleteAllReckoning = (
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return Delete(`/reckoning/all`, callback);
};
