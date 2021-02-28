import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { ListaEstado } from "../../../../../interfaces/ListaEstado";
@Component({
  selector: 'app-coluna-grade',
  templateUrl: './coluna-grade.component.html',
  styleUrls: ['./coluna-grade.component.css']
})
export class ColunaGradeComponent implements OnInit {

  constructor() { }

  @Input() lista: TaskTemplate[];
  @Input() nome: any;
  @Input() labels_buttons: any[];
  @Output() newItemEvent = new EventEmitter<ListaEstado>();

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
