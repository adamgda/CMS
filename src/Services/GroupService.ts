import { Delete, Get, Post, Put } from "./ApiService";
import { AxiosResponse } from "axios";
import { GroupResponseTypes } from "./GroupService.types";

export const GetGroups = (
  callback: Function
): Promise<AxiosResponse<GroupResponseTypes[]> | void> => {
  return Get(`/group`, callback);
};

export const GetGroupDetails = (
  id: number,
  callback: Function
): Promise<AxiosResponse<GroupResponseTypes> | void> => {
  return Get(`/group/${id}`, callback);
};

export const EditGroupDetails = (
  data: GroupResponseTypes,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return Put(`/group/${data.id}`, data, callback);
};

export const AddGroup = (
  data: GroupResponseTypes,
  callback: Function
): Promise<AxiosResponse<any> | void> => {
  return Post(`/group`, data, callback);
};

export const DeleteGroup = (
  id: number,
  callback?: Function
): Promise<AxiosResponse<any> | void> => {
  return Delete(`/group/${id}`, callback && callback());
};
