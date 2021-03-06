import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ErrorModel } from 'src/interfaces/TaskTemplate';
import { ConApiService } from 'src/services/con-api.service';
import { UtilitiesService } from 'src/services/utilities.service';
@Component({
  selector: 'nova-tarefa',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private formBuider: FormBuilder,
    private con: ConApiService,
    private util: UtilitiesService
  ) { }

  @ViewChild("modal") meuModal;

  ListaDeHorario = [
    { label: '08:00', value: '08:00' },
    { label: '09:00', value: '09:00' },
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '12:00', value: '12:00' },
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
    { label: '17:00', value: '17:00' },
    { label: '18:00', value: '18:00' },
    { label: '19:00', value: '19:00' }
  ];

  ListaImportancia = [
    { label: 'Necessário', value: '2' },
    { label: 'Importante', value: '9' },
    { label: 'Urgente', value: '7' }
  ];

  resErro: ErrorModel = {
    statusCode: 0,
    message: "",
    errors: "",
    title: ""
  };

  date = "";
  dateLimit = "";
  TasksFormBuilder: FormGroup;

  private CreateForm() {
    this.TasksFormBuilder = this.formBuider.group({
      titulo: new FormControl('', [Validators.required, Validators.min(20)]),
      data: new FormControl('', [Validators.required, Validators.min(10)]),
      hora: new FormControl('', [Validators.required]),
      nivel: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required, Validators.min(35)])
    });
  }

  ngOnInit(): void {
    let tempDate = new Date();
    this.date = this.util.dateFormat(tempDate);
    tempDate.setDate(tempDate.getDate() + 7)
    this.dateLimit = this.util.dateFormat(tempDate);
    this.CreateForm();
  }

  onSubmit() {
    let task =
    {
      title: this.TasksFormBuilder.controls["titulo"].value,
      description: this.TasksFormBuilder.controls["descricao"].value,
      level: this.TasksFormBuilder.controls["nivel"].value,
      status: 0,
      dateRelease: this.util.DateInFormatUTC(new Date()),
      deliveryDate: this.TasksFormBuilder.controls["data"].value + "T" + this.TasksFormBuilder.controls["hora"].value + ":00",
    }

    this.con.PostTasks(task).subscribe(
      () => { this.util.redirectTo("dashboard/tasks") },
      err => {
        this.resErro = err.error;
        this.meuModal.open();
      }
    );

  }
}
