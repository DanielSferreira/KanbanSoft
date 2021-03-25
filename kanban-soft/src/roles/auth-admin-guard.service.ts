import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenData } from 'src/interfaces/TaskTemplate';
import { LoginServiceService } from 'src/services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuardService implements CanActivateChild {

  token: TokenData;
  constructor(private login: LoginServiceService, private router: Router) {
    this.token = this.login.Decode();
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.token.role === 'admin')
      return true;
    else
      if(this.token.role === 'normal')  {
        this.router.navigate(['./dashboard']);
        return false;
      } else {
        this.router.navigate(['./login']);
        return false;
      }

  }
}