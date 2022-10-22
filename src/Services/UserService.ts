import { DeleteApi, GetApi, PostApi, PatchApi } from "./ApiService";

export const GetUsers = (callback: Function, finallyCallback: Function) => {
  return GetApi(`/user`, callback, finallyCallback);
};

export const GetUserDetails = (
  id: number,
  callback: Function,
  finallyCallback: Function
) => {
  return GetUsers((res: any) => {
    callback(res?.data.filter((res: any) => res.id === id)[0]);
  }, finallyCallback);
};

export const EditUserDetails = (
  id: number,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PatchApi(`/user/${id}`, data, callback, finallyCallback);
};

export const AddUser = (
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PostApi(`/user`, data, callback, finallyCallback);
};

export const DeleteUser = (id: number, finallyCallback: Function) => {
  return DeleteApi(`/user/${id}`, finallyCallback);
};
