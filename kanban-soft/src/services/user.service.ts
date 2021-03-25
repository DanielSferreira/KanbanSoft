import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserGet, UserPost } from 'src/interfaces/TaskTemplate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Response-Type': 'text',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "https://localhost:5001/",
      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept"
    })
  };
  private configUrl = "https://localhost:5001/";

  public GetUser(id: number) {
    return this.http.post<UserGet>(`${this.configUrl}User/${id}`, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public DeactivateUser(id: number) {
    return this.http.put<string>(`${this.configUrl}User/Deactivate/`+id, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public GetUsers() {
    return this.http.get<UserGet[]>(`${this.configUrl}User/`, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }

  public UpdateScore(data) {
    return this.http.put<UserGet>(`${this.configUrl}User/UpdateScore/${data.id}/${data.score}/${data.type}`, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public UpdatePasswordByAdmin(data) {
    return this.http.put<UserGet>(`${this.configUrl}User/UpdatePasswordByAdmin/`,
      {
        id: data.id,
        newPass: data.newPass
      },
    this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public UpdatePasswordByUser(data) {
    return this.http.put<UserGet>(`${this.configUrl}User/UpdatePasswordByAdmin/`,
      {
        id: data.id,
        prevPass: data.prevPass,
        newPass: data.newPass
      },
    this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }

  public put(id: number) {
    return this.http.post<UserGet>(`${this.configUrl}User/${id}`, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public post(data: UserPost) {
    return this.http.post<UserPost>(`${this.configUrl}User/`, {
      id: 0,
      name: data.name,
      email: data.email,
      pass: data.pass,
      nick: data.nick,
      score: 0,
      role: data.role
    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public putData(data: UserPost) {
    return this.http.put<UserPost>(`${this.configUrl}User/`, {
      id: data.id,
      name: data.name,
      email: data.email,
      pass: data.pass,
      nick: data.nick,
      role: data.role
    }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log("Deu Ruim");
    return throwError(error);
  }

}
