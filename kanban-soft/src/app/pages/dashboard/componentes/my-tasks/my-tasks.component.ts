import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';
import { LoginServiceService } from 'src/services/login-service.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  list: Observable<TaskTemplate[]>;
  items;
@ViewChild("modalCaution") modalCaution;
  constructor(
    private con: ConApiService,
    private login: LoginServiceService,
    private user: UserService
  ) {
    this.list = this.con.GetTasksByUser(this.login.GetUser());
  }

  ngOnInit(): void {
    this.list.toPromise().then(x => this.items = x.filter(d => d.status == 1 || d.status == 2));
    this.list.subscribe();
  }

  columns = [
    { property: 'id', label: 'Código', },
    { property: 'title', label: 'Titulo Tarefa' },
    { property: 'trackDate', label: 'Data que foi Pego', type: 'columnTemplate' },
    { property: 'abc', label: 'Ações', type: 'cellTemplate' },
  ];

  finaliza(row: TaskTemplate) {

    if(row.status === 2){
      row.status = 4;
      this.con.AddTasktoUser(row).subscribe(
        e => console.log(e),
        err => console.log(err)
      )
    } else {
      this.modalCaution.open();
    }
    

    
  }

}
