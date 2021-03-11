import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  list: Observable<TaskTemplate[]>;
  items;
 
  constructor(private con: ConApiService,private login: LoginServiceService) {
    this.list = this.con.GetTasksByUser(this.login.GetUser());
  }

  ngOnInit(): void {
    this.list.toPromise().then(x => this.items = x.map(d => d));
    this.list.subscribe();
  }

  columns = [
    { property: 'id', label: 'Código', },
    { property: 'title', label: 'Titulo Tarefa' },
    { property: 'trackDate', label: 'Data que foi Pego', type: 'columnTemplate' },
    { property: 'abc', label: 'Ações', type: 'cellTemplate' },
  ];

  finaliza(row: TaskTemplate) {
    
    row.status = 4;
    console.log(row);
    this.con.PutTasks(row).subscribe(e => console.log(e), err => console.log(err));
  }

}
