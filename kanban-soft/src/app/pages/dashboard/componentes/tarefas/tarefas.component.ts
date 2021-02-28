import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConApiService } from 'src/app/services/con-api.service';
import { ListaEstado } from 'src/interfaces/ListaEstado';
import { Tasks, TaskTemplate } from 'src/interfaces/TaskTemplate';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private a: ConApiService) { }
  Lista: Observable<Tasks[]>

  fazer: Tasks[]
  fazendo: Tasks[]
  concluido: Tasks[]

  id_user = 4;
  dataPego = new Date().getUTCDate();

  ngOnInit(): void {
    this.Lista = this.a.GetTasks();
    this.FilterLista();
  }

  mudar(item: ListaEstado)
  {
    if (item.lista === "Para Fazer")
      this._pegarTarefa(item)
    else if (item.lista === "Sendo Feito")
      this._concluirTarefa(item)
    else if (item.lista === "Já concluido")
      this._corrigirTarefa(item)

    this.FilterLista();

  }

  private _pegarTarefa(item: ListaEstado): void 
  {
    let help = this.fazer[item.index]
    var temTask: TaskTemplate = {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: new Date(),
      trackDate: new Date(),
      deliveryDate: new Date(),
      level: help.level
    }
    this.a.PutTasks(temTask).subscribe(res => console.log(res));
  }
  private _devolverTarefa(item: ListaEstado): void 
  {
    let help = this.fazendo[item.index]
    var temTask: TaskTemplate = {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: new Date(),
      trackDate: new Date(),
      deliveryDate: new Date(),
      level: help.level
    }
    this.a.PutTasks(temTask).subscribe(res => console.log(res));
  }
  private _concluirTarefa(item: ListaEstado): void 
  {
    let help = this.fazendo[item.index]
    var temTask: TaskTemplate = {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: new Date(),
      trackDate: new Date(),
      deliveryDate: new Date(),
      level: help.level
    }
    this.a.PutTasks(temTask).subscribe(res => console.log(res));
  }
  private _corrigirTarefa(item: ListaEstado): void 
  {
    let help = this.concluido[item.index]
    var temTask: TaskTemplate = {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: new Date(),
      trackDate: new Date(),
      deliveryDate: new Date(),
      level: help.level
    }
    this.a.PutTasks(temTask).subscribe(res => console.log(res));
  }

  private FilterLista() {
    this.Lista.subscribe(lista => {
      this.fazer = lista.filter(a => a.status == 0)
      this.fazendo = lista.filter(a => a.status == 1)
      this.concluido = lista.filter(a => a.status == 2)
      console.log(this.fazer);
    });
  }
}


