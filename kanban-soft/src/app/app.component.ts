import { Component } from '@angular/core';
import { ConApiService } from './../services/con-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-soft';
  constructor(a: ConApiService){
    a.GetTasks().subscribe(a=>console.log(a));
    


  }
}
