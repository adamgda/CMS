import { Get, Put, Delete, Post } from "./ApiService";
import { IsAdmin } from "./MeService";
import { AxiosResponse } from "axios";
import { ProjectResponseTypes } from "./ProjectService.types";

export const GetProjects = (
  callback: Function
): Promise<AxiosResponse<ProjectResponseTypes[]> | void> => {
  const url = IsAdmin ? "/project/all" : "/project";
  return Get(url, callback);
};

export const GetProjectDetails = (
  id: number,
  callback: Function
): Promise<AxiosResponse<ProjectResponseTypes> | void> => {
  return Get(`/project/${id}`, callback);
};

export const EditProjectDetails = (
  id: number,
  data: ProjectResponseTypes,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Put(`/project/${id}`, data, callback);
};

export const AddProject = (
  data: ProjectResponseTypes,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Post(`/project`, data, callback);
};

export const DeleteProject = (
  id: number,
  callback: Function
): Promise<AxiosResponse<unknown> | void> => {
  return Delete(`/project/${id}`, callback);
};
