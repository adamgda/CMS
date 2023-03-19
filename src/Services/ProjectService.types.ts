export interface ProjectProgressTypes {
  id: string;
  done: boolean;
  label: string;
}

export interface ProjectResponseTypes {
  id?: number;
  name: string;
  description: string;
  link: string;
  groupId: string;
  progress: ProjectProgressTypes[];
}
