import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Cookies from 'js-cookie';

import { LoginModel, TokenData, TokenModel } from "../interfaces/TaskTemplate";
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
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

  public login(login: LoginModel) {
    return this.http.post<TokenModel>(this.configUrl + "login/", { email: login.login, pass: login.password }, this.httpOptions).pipe(map(a => a), catchError(this.handleError));
  }
  public guardTokenInCache(token: TokenModel) {
    Cookies.set('token', token.token, { expires: 0.084 });
    Cookies.set('user', token.user, { expires: 0.084 });
  }
  public Logout() {
    Cookies.remove('token');
    Cookies.remove('user');
    window.location.href = '/';
  }
  public HaveToken(): boolean {
    return Cookies.get('token') !== undefined;
  }
  public Decode(): TokenData {
    return decode(Cookies.get('token'));
  }
  public GetUser(): number {
    return Cookies.get('user') !== undefined ? parseInt(Cookies.get('user')) : 0;
  }

  private handleError(error: HttpErrorResponse) {
    console.log("Deu Ruim");
    return throwError(error);
  }
}