import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {


  list: Observable<TaskTemplate[]>;
  constructor(
    private con: ConApiService,
  ) {
    this.list = this.con.GetDispTasks();

  }
  items;
  ngOnInit(): void {

    this.list.toPromise().then(x => {
      this.items = x.map(d => {
        // let format = "dd/MM/yyyy - HH:mm"
        // d.trackDate = this.dt.transform(d.trackDate, format)
        return d;
      })
    });
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
