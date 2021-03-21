import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginModel, TokenModel } from 'src/interfaces/TaskTemplate';
import { LoginServiceService } from './../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild {

  private isAuthenticated: boolean;
  constructor(private route: Router, private lg: LoginServiceService) {
    this.isAuthenticated = this.lg.HaveToken();
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.isAuthenticated)
      return this.route.parseUrl('/login');
    else
      return true;
  }

  public Activate(x: TokenModel) {
    this.isAuthenticated = x.status;
    if (x.status === true) {
      this.lg.guardTokenInCache(x);
    }
  }
}
