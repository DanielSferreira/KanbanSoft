export interface TaskTemplate {
  id: number,
  idUser: number,
  name: string,
  title: string,
  description: string,
  status: number,
  dateRelease: Date,
  trackDate: Date,
  deliveryDate: Date,
  level: number,
}

export interface Tasks {
  id: number,
  name: string,
  title: string,
  description: string,
  status: number,
  level: number,
  date: string
}
export interface TaskTrack {
  "id": number,
  "idTask": number,
  "idUser": number,
  "trackDate": any,
  "deliveryDate": any
}