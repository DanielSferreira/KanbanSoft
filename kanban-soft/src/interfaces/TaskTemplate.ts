export interface TaskTemplate {
  id: number,
  idUser: number,
  name: string,
  title: string,
  description: string,
  status: number,
  dateRelease: any,
  trackDate: any,
  deliveryDate: any,
  level: number,
}

export interface UserGet {
  id:number,
  name: string,
  nick: string,
  email: string
}
export interface LoginModel {
  login: string, 
  password: string
}
export interface ErrorModel {
  statusCode: number;
  message: string;
  errors: any;
  title: string;
}

export interface TokenModel {
  status: boolean,
  user: string,
  token: string,
}