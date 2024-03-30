export interface UserEditFormTypes {
  id: number | null;
  callback: () => void;
}

export interface UserFormTypes {
  login: string;
  email: string;
  password: string;
  group_id: number;
  groupId?: number;
}
