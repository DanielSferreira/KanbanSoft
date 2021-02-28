import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'nova-tarefa',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private formBuider: FormBuilder) { }

  TasksFormBuilder = this.formBuider.group({
    titulo: '',
    data: '',
    hora: '',
    descricao: ''
  });

  ngOnInit(): void {
  }
  onSubmit() {

    let task =
    {
      title: this.TasksFormBuilder.controls["titulo"].value,
      description: this.TasksFormBuilder.controls["descricao"].value,
      status: 0,
      dateRelease: this.TasksFormBuilder.controls["data"].value + "T" + this.TasksFormBuilder.controls["hora"].value + ":00",
      level: 3,
    }
    console.log(task);
  }
}

