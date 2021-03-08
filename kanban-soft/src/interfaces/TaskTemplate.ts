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
export interface ErrorModel {
  statusCode: number;
  message: string;
  errors: any;
  title: string;
}