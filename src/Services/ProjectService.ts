import { GetApi, PutApi, DeleteApi, PostApi } from "./ApiService";

export const GetAllProjects = (
  callback: Function,
  finallyCallback: Function
) => {
  return GetApi("/project/all", callback, finallyCallback);
};

export const GetProjectsByGroup = (
  id: number,
  callback: Function,
  finallyCallback: Function
) => {
  return GetApi(`/project/group/${id}`, callback, finallyCallback);
};

export const GetProjectDetails = (
  id: number,
  callback: Function,
  finallyCallback: Function
) => {
  return GetApi(`/project/${id}`, callback, finallyCallback);
};

export const EditProjectDetails = (
  id: number,
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PutApi(`/project/${id}`, data, callback, finallyCallback);
};

export const AddProject = (
  data: any,
  callback: Function,
  finallyCallback: Function
) => {
  return PostApi(`/project`, data, callback, finallyCallback);
};

export const DeleteProject = (id: number, finallyCallback: Function) => {
  return DeleteApi(`/project/${id}`, finallyCallback);
};
