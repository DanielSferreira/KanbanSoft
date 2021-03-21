import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConApiService } from 'src/services/con-api.service';
import { UtilitiesService } from 'src/services/utilities.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

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
    { label: 'Importante', value: '5' },
    { label: 'Urgente', value: '7' }
  ];

  constructor(
    private task: ConApiService,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private util: UtilitiesService
  ) { }

  date = "";
  dateLimit = "";

  startDate;
  formEdit: FormGroup;
  ngOnInit() {
    this.CreateForm("");
    let tempDate = new Date();
    this.date = this.util.dateFormat(tempDate);
    tempDate.setDate(tempDate.getDate() + 7)
    this.dateLimit = this.util.dateFormat(tempDate);
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.task.GetTask(params.id).subscribe(e => this.CreateForm(e))
      });
  }
  private CreateForm(e) {

    let tempDate = e.dataRelease === undefined ?  "2011-03-01" : new Date(e.dateRelease);
    console.log(e.dateRelease);
    
    this.formEdit = this.form.group({
      id: new FormControl(e.id === undefined ? "" : e.id),
      title: new FormControl(e.title === undefined ? "" : e.title),
      description: new FormControl(e.description === undefined ? "" : e.description),
      level: new FormControl(e.level === undefined ? "" : e.level),
      data: new FormControl(tempDate),
      hora: new FormControl(),
    });

  }
  onSubmit() {
    console.log(this.formEdit.value)
    this.task.PutTasks(this.formEdit.value).subscribe(e=>console.log(e), err=> console.log(err))
  }
}
