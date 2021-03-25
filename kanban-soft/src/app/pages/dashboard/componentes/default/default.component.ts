import { Component, OnInit } from '@angular/core';
import { PoChartType } from '@po-ui/ng-components';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(
    private con: ConApiService,
    private login: LoginServiceService
  ) {
    this.user = this.login.GetUser();
  }
  
  user: number
  list: TaskTemplate[];
  ToDo: number = 0;
  InProgress: number = 1;
  Completed: number = 0;

  a = PoChartType.Line;

  ngOnInit(): void {
    this.con.GetTasksByUser(this.user).subscribe(x => {
      this.list = x.filter(t => t.status === 1);
      this.ToDo = x.filter(t => t.status === 0).length;
      this.InProgress = this.list.length;
      this.Completed = x.filter(t => t.status === 2).length;
    })
  }

}
