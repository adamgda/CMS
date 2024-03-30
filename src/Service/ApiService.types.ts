interface IData {
  message?: string;
}

interface IResponse {
  data: IData;
  status: number;
}

export interface ResponseTypes {
  response: IResponse;
}
