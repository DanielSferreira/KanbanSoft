import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coluna-grade',
  templateUrl: './coluna-grade.component.html',
  styleUrls: ['./coluna-grade.component.css']
})
export class ColunaGradeComponent implements OnInit {

  constructor() { }

  @Input() lista: any[];
  @Input() nome: any;
  @Input() labels_buttons: any[];
  @Output() newItemEvent = new EventEmitter<{ index: number, novoEstado: string, lista:string }>();

  ngOnInit(): void {
  }
  pass(nome, NovoEstado) {
    this.newItemEvent.emit({
      index: this.lista.findIndex(a => a.titulo === nome),
      novoEstado: NovoEstado,
      lista: this.nome
    });
  }
}
