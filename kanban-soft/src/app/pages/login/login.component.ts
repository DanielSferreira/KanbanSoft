import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/interfaces/TaskTemplate';
import { AuthGuardChildService } from 'src/services/auth-guard-child.service';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private authC: AuthGuardChildService, private route: Router) {
  }
  ngOnInit(): void {
  }
  contactEmail = "";
  abrir(log: LoginModel) {
    console.log(log);

    this.loginService.login(log).subscribe(x => {
      this.authC.Activate(x);
      this.route.navigate(['dashboard']);
    });

  }

}
