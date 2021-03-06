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
    private dt: DatePipe
  ) {
    this.list = this.con.GetTasks();

  }
  currencyObj;
  ngOnInit(): void {

    this.list.toPromise().then(x => {
      this.currencyObj = x.map(d => {
        let format = "dd/MM/yyyy - HH:mm"
        d.trackDate = this.dt.transform(d.trackDate, format)
        return d;
      })
    });
    this.list.subscribe();
  }
  columns = [
    { property: 'id', label: 'Código', },
    { property: 'title', label: 'Titulo Tarefa' },
    //{ property: 'description', label: 'Descrição', },
    { property: 'trackDate', label: 'Data que foi Pego', },
    { property: 'abc', label: 'Ações', type: 'cellTemplate' },
  ];
abc(e){
  console.log(e);
}

}
