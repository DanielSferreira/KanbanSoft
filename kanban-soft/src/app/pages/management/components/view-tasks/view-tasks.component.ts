import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConApiService } from 'src/services/con-api.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  
  constructor(
    private tasks: ConApiService,
    private route: Router
  ) { }

  items

  ngOnInit(): void {
    this.tasks.GetTasks().subscribe(e=> this.items = e)
  }

  columns = [
    { property: 'title', label: 'Name' },
    { property: 'description', label: 'Nick name' },
    { property: 'dateRelease', label: 'E-mail' },
    { property: 'abc', label: 'Actions', type: 'cellTemplate' },
  ];
  
  edit(id:number){
    this.route.navigate(['admin/editTasks'], { queryParams: { id:id } })
  }
}
