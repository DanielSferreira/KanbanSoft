import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Table: any = [
    {
      "Nome Completo": "Dan",
      email: "daniel6991ferreira@gmail.com"
    },
    {
      "Nome Completo": "Ju",
      email: "ju@gmail.com"
    },
    {
      "Nome Completo": "fa",
      email: "faniel6971ferreira@gmail.com"
    }
  ];
}
