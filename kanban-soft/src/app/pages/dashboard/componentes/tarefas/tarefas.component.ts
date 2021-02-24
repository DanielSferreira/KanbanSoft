import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor() { }

  algo: obj[] =
    [{
      titulo: 'Faxina 1',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "todo"

    }, {
      titulo: 'Levar o lixo',
      nome: '',
      descricao: 'Tirar o lixo de casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "andamento"

    }, {
      titulo: 'Faxina 2',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "todo"

    }, {
      titulo: 'Faxina 3',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "todo"

    }, {
      titulo: 'Faxina 4',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "todo"

    }, {
      titulo: 'Faxina 5',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "todo"

    }, {
      titulo: 'Faxina 6',
      nome: '',
      descricao: 'Fazer faxina em casa',
      data: '',
      data_pego: '',
      data_concluido: '',
      nivel: 0,
      status: "concluido"

    }]

  fazer = this.algo.filter(e => e.status === "todo");
  fazendo = this.algo.filter(e => e.status === "andamento");
  concluido = this.algo.filter(e => e.status === "concluido");

  ngOnInit(): void {
  }

  mudar(item: { index: number, novoEstado: string, lista:string }) {

    if (item.lista === "Para Fazer")
      this.fazer[item.index].status = item.novoEstado;
    else if (item.lista === "Sendo Feito")
      this.fazendo[item.index].status = item.novoEstado;
    else if (item.lista === "Já concluido")
      this.concluido[item.index].status = item.novoEstado;


    this.fazer = this.algo.filter(e => e.status === "todo");
    this.fazendo = this.algo.filter(e => e.status === "andamento");
    this.concluido = this.algo.filter(e => e.status === "concluido");

  }
}


interface obj {

  titulo: string,
  nome: string,
  descricao: string,
  data: string,
  data_pego: string,
  data_concluido: string,
  nivel: 0,
  status: string

}