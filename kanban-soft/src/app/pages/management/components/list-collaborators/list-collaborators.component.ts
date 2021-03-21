import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-list-collaborators',
  templateUrl: './list-collaborators.component.html',
  styleUrls: ['./list-collaborators.component.css']
})
export class ListCollaboratorsComponent implements OnInit {

  constructor(
    private user: UserService,
    private route: Router
  ) { }

  items

  ngOnInit(): void {
    this.user.GetUsers().subscribe(e=> this.items = e)
  }

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nick', label: 'Nick name' },
    { property: 'email', label: 'E-mail' },
    { property: 'role', label: 'Role' },
    { property: 'abc', label: 'Actions', type: 'cellTemplate' },
  ];
  
  edit(id:number){
    this.route.navigate(['admin/editColab'], { queryParams: { id:id } })
  }
}
