import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ConApiService } from 'src/services/con-api.service';
import { ListaEstado } from 'src/interfaces/ListaEstado';
import { Tasks, TaskTemplate } from 'src/interfaces/TaskTemplate';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private a: ConApiService, private router: Router) { }
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

  mudar(item: ListaEstado) {

    if (item.lista === "Para Fazer")
      this._pegarTarefa(item)
    else if (item.lista === "Sendo Feito")
      this._concluirTarefa(item)
    else if (item.lista === "Já concluido")
      this._corrigirTarefa(item)

    this.FilterLista();
    this.redirectTo("dashboard/tasks")
  }

  private _pegarTarefa(item: ListaEstado) {
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
    this.a.PutTasks(temTask).subscribe();
  }
  private _concluirTarefa(item: ListaEstado) {
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
    this.a.PutTasks(temTask).subscribe();
  }
  private _corrigirTarefa(item: ListaEstado) {
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
    this.a.PutTasks(temTask).subscribe();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  private FilterLista() {
    this.Lista.toPromise().then(lista => {
      this.fazer = lista.filter(a => a.status == 0)
      this.fazendo = lista.filter(a => a.status == 1)
      this.concluido = lista.filter(a => a.status == 2)
    }).catch(e => console.log(e))
      
  }
}


