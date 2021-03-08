import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskTemplate, UserGet } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';
import { ListaEstado } from "../../../../../interfaces/ListaEstado";
@Component({
  selector: 'app-coluna-grade',
  templateUrl: './coluna-grade.component.html',
  styleUrls: ['./coluna-grade.component.css']
})
export class ColunaGradeComponent implements OnInit {

  constructor(private con: ConApiService) {
    this.con.GetUser().subscribe(x => this.users = x);
  }
  users: UserGet[];
  dateFormat = "'as' hh:mm 'em' dd/MM";
  @Input() lista: TaskTemplate[];
  @Input() nome: any;
  @Input() labels_buttons: any[];
  @Output() newItemEvent = new EventEmitter<ListaEstado>();

  resolveStatus(sts: number): string {
    if (sts === 2)
      return "Necessário"
    else if (sts === 9)
      return "Importante"
    else if (sts === 7)
      return "Urgente"
  }
  getUserData(idUser: number) {
    let user: UserGet;
    user = this.users.find(x => x.id === idUser);
    return user === undefined ? { name: "", nick: "", email: "" } : user;
  }
  ngOnInit(): void {
  }
  pass(index, NovoEstado) {
    this.newItemEvent.emit({
      index: index,
      novoEstado: NovoEstado,
      lista: this.nome
    });
  }

}
