export interface LoginResponseTypes {
  authToken: string;
  groupId: number;
  isAdmin: boolean;
  login: string;
}

export interface LoginResponseData {
  data: LoginResponseTypes;
}
