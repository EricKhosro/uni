export interface Packet<T> {
  msg: string;
  errorCode: number;
  statusCode: number;
  data: T;
}

export interface IFileTemplate {
  columnNo: number;
  columnTitle: string;
}
