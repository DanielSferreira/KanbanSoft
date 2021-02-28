import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';

@Injectable({
  providedIn: 'root'
})
export class ListTempService {

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

  GetDevs() {
    return this.http.get<any[]>(this.configUrl + "User/", this.httpOptions).pipe(map(a => a), catchError(this.handleError));
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
