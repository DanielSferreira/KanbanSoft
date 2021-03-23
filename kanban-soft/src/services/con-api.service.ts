import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TaskTemplate, UserGet } from 'src/interfaces/TaskTemplate';

@Injectable({
  providedIn: 'root'
})
export class ConApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Response-Type': 'text',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "https://localhost:5001/",
      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) { }

  private configUrl = "https://localhost:5001/";

  public GetTasks() {
    return this.http.get<TaskTemplate[]>(this.configUrl + "Tasks/", this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  } 
  public GetTask(id) {
    return this.http.get<TaskTemplate>(this.configUrl + "Tasks/"+id, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public GetTasksByStatus(stats: number) {
    return this.http.get<TaskTemplate[]>(this.configUrl + "Tasks/getByStatus/" + stats, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public GetTasksByUser(User: number) {
    return this.http.get<TaskTemplate[]>(this.configUrl + "Tasks/getByUser/" + User, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public GetDispTasks() {
    return this.http.get<TaskTemplate[]>(this.configUrl + "Tasks/getDispTasks/", this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public GetUser() {
    return this.http.get<UserGet[]>(this.configUrl + "User/", this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public PutTasks(item: TaskTemplate) {

    return this.http.put<TaskTemplate>(this.configUrl + "Tasks/", {
      id: item.id,
      idUser: item.idUser,
      name: item.name,
      title: item.title,
      description: item.description,
      status: item.status,
      dateRelease: item.dateRelease,
      trackDate: item.trackDate,
      deliveryDate: item.deliveryDate,
      level: item.level

    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public AddTasktoUser(item: TaskTemplate) {

    return this.http.put<TaskTemplate>(this.configUrl + "Tasks/AddTasktoUser", {
      id: item.id,
      idUser: item.idUser,
      name: item.name,
      title: item.title,
      description: item.description,
      status: item.status,
      dateRelease: item.dateRelease,
      trackDate: item.trackDate,
      deliveryDate: item.deliveryDate,
      level: item.level

    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public UpdateTaskByAdmin(item: TaskTemplate) {

    return this.http.put<TaskTemplate>(this.configUrl + "Tasks/UpdateTaskByAdmin", {
      id: item.id,
      idUser: item.idUser,
      name: item.name,
      title: item.title,
      description: item.description,
      status: item.status,
      dateRelease: item.dateRelease,
      trackDate: item.trackDate,
      deliveryDate: item.deliveryDate,
      level: item.level

    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }

  public PostTasks(item) {
    return this.http.post<TaskTemplate>(this.configUrl + "Tasks/", {
      id: 0,
      idUser: 0,
      name: "",
      title: item.title,
      dateRelease: item.dateRelease,
      trackDate: new Date(),
      deliveryDate: item.deliveryDate,
      description: item.description,
      status: item.status,
      level: item.level

    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log("Deu Ruim");

    return throwError(error);
  }
}


