import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private login: LoginServiceService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    let us: tokenData = this.login.Decode();
    console.log(us);
    if(us.role === 'normal') return true;
    if(us.role === 'admin') return true;
    else return false;
  }
}
interface tokenData {
  role: string
}