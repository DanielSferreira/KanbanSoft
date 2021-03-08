import { Component, OnInit } from '@angular/core';
import { ConApiService } from 'src/services/con-api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private con: ConApiService) { }

  list
  ngOnInit(): void {
    this.con.GetTasksByStatus(1).subscribe(x=> this.list = x.filter(t=>t.idUser = 4))
  }

}
