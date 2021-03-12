import { Component, OnInit } from '@angular/core';
import { ConApiService } from 'src/services/con-api.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private con: ConApiService,
    private login: LoginServiceService) { 

      this.user = this.login.GetUser();

  }
  user:number
  list
  ngOnInit(): void {
    this.con.GetTasksByUser(this.user).subscribe(x=> this.list = x.filter(t=>t.status === 1))
  }

}
