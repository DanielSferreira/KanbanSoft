import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenData } from 'src/interfaces/TaskTemplate';
import { LoginServiceService } from './../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  token: TokenData;
  constructor(private login: LoginServiceService, private router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.token = this.login.Decode();
    if (this.token.role === 'admin')
      return true;
    else
      if (this.token.role === 'normal') {
        this.router.navigate(['./dashboard']);
        return false;
      } else {
        this.router.navigate(['./login']);
        return false;
      }
  }
}
