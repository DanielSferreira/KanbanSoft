import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Tasks, TaskTemplate } from 'src/interfaces/TaskTemplate';

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
    return this.http.get<Tasks[]>(this.configUrl + "Tasks/", this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public PutTasks(item: TaskTemplate) {
    console.log(item);
    console.log({ item });

    return this.http.put<Tasks>(this.configUrl + "Tasks/", {
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error("Ocorreu um erro");
      console.error(error.status);
      console.error(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}


