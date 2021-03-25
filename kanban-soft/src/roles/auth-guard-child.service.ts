import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel, TokenData, TokenModel } from 'src/interfaces/TaskTemplate';
import { LoginServiceService } from './../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild {

  token: TokenData;
  isValid = false;
  constructor(private login: LoginServiceService, private router: Router) {
    this.isValid = this.login.HaveToken()
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.token = this.login.Decode();
    if (this.token.role === 'admin')
      return true;
    else if (this.token.role === 'normal') {
      return true;
    }
    else {
      this.router.navigate(['./login']);
      return false;
    }

  }
  public Activate(x: TokenModel) {
    this.isValid = x.status;
    if (x.status === true) {
      this.login.guardTokenInCache(x);
    }
  }
}
