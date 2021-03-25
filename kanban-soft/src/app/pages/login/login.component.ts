import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/interfaces/TaskTemplate';
import { AuthGuardChildService } from 'src/roles/auth-guard-child.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginServiceService, private authC: AuthGuardChildService, private route: Router) {
  }

  abrir(log: LoginModel) {

    this.loginService.login(log).subscribe(x => {
      this.authC.Activate(x);
      this.route.navigate(['dashboard']);
    });

  }

}
