import { Delete, Get, Post, Patch } from "./ApiService";
import { AxiosResponse } from "axios";
import { UserResponseTypes } from "./UserService.types";
import { UserFormTypes } from "@organism/User/UserEditForm";

export const GetUsers = (
  callback: Function
): Promise<AxiosResponse<UserResponseTypes[]> | void> => {
  return Get(`/user`, callback);
};

export const GetUserDetails = (
  id: number,
  callback: Function
): Promise<AxiosResponse<UserResponseTypes[]> | void> => {
  return GetUsers((res: any) => {
    callback(res?.data.filter((res: any) => res.id === id)[0]);
  });
};

export const EditUserDetails = (
  id: number,
  data: UserResponseTypes | UserFormTypes,
  callback: Function
): Promise<AxiosResponse<UserResponseTypes> | void> => {
  return Patch(`/user/${id}`, data, callback);
};

export const AddUser = (
  data: UserResponseTypes | UserFormTypes,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Post(`/user`, data, callback);
};

export const DeleteUser = (
  id: number,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Delete(`/user/${id}`, callback);
};
