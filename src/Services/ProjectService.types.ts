export interface ProjectProgressTypes {
  id: string;
  done: boolean;
  label: string;
}

export interface ProjectResponseTypes {
  id: number;
  name: string;
  description: string;
  link: string;
  group_id: number;
  progress: ProjectProgressTypes[];
}
