import { DeleteApi, GetApi, PostApi, PutApi } from "./ApiService";

export const GetGroups = (callback: Function, finallyCallback: Function) => {
  return GetApi(`/group`, callback, finallyCallback);
};

export const GetGroupDetails = (
  id: number,
  callback: Function,
  finallyCallback: Function
) => {
  return GetGroups((res: any) => {
    callback(res?.data.filter((res: any) => res.id === id)[0]);
  }, finallyCallback);
};

export const EditGroupDetails = (
  id: number,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PutApi(`/group/${id}`, data, callback, finallyCallback);
};

export const AddGroup = (
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PostApi(`/group`, data, callback, finallyCallback);
};

export const DeleteGroup = (id: number, finallyCallback: Function) => {
  return DeleteApi(`/group/${id}`, finallyCallback);
};
