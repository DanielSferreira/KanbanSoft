import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConApiService } from 'src/services/con-api.service';
import { ListaEstado } from 'src/interfaces/ListaEstado';
import { TaskTemplate } from 'src/interfaces/TaskTemplate';
import { UtilitiesService } from 'src/services/utilities.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private a: ConApiService, private helper: UtilitiesService, private router: Router, private login: LoginServiceService) { }
  Lista: Observable<TaskTemplate[]>;

  fazer: TaskTemplate[];
  fazendo: TaskTemplate[];
  concluido: TaskTemplate[];

  id_user = this.login.GetUser();

  ngOnInit(): void {
    this.Lista = this.a.GetTasks();
    this.FilterLista();
  }

  mudar(item: ListaEstado) {
    console.log(item);

    let res: TaskTemplate;
    if (item.lista === "Para Fazer")
      res = this._pegarTarefa(item);
    else if (item.lista === "Sendo Feito" && item.novoEstado === 0)
      res = this.AbandonarTarefa(item);
    else if (item.lista === "Sendo Feito" && item.novoEstado === 2)
      res = this._concluirTarefa(item);
    else if (item.lista === "Já concluido")
      res = this._corrigirTarefa(item);

    this.FilterLista();
    this.a.PutTasks(res).subscribe(()=>
    this.helper.redirectTo("dashboard/tasks"));
  }

  private _pegarTarefa(item: ListaEstado): TaskTemplate {
    let help = this.fazer[item.index];
    return {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: help.dateRelease,
      trackDate: new Date(),
      deliveryDate: '',
      level: help.level
    };

  }
  private AbandonarTarefa(item: ListaEstado): TaskTemplate {
    let help = this.fazendo[item.index];

    return {
      id: help.id,
      idUser: -1,
      name: help.name,
      title: help.title,
      description: help.description,
      status: 0,
      dateRelease: help.dateRelease,
      trackDate:  new Date("01/01/0001"),
      deliveryDate: '',
      level: help.level
    };
  }
  private _concluirTarefa(item: ListaEstado): TaskTemplate {
    let help = this.fazendo[item.index];
    return {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: help.dateRelease,
      trackDate: help.trackDate,
      deliveryDate: new Date(),
      level: help.level
    };
  }
  private _corrigirTarefa(item: ListaEstado): TaskTemplate {
    let help = this.concluido[item.index];
    return {
      id: help.id,
      idUser: this.id_user,
      name: help.name,
      title: help.title,
      description: help.description,
      status: item.novoEstado,
      dateRelease: '',
      trackDate: '',
      deliveryDate: new Date("01/01/0001"),
      level: help.level
    };
  }

  private FilterLista() {
    this.Lista.toPromise().then(lista => {
      this.fazer = lista.filter(a => a.status == 0);
      this.fazendo = lista.filter(a => a.status == 1);
      this.concluido = lista.filter(a => a.status == 2);
    }).catch(e => console.log(e));

  }
}


