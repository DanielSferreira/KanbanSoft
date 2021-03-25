import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserPost } from 'src/interfaces/TaskTemplate';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-collaborator',
  templateUrl: './add-collaborator.component.html',
  styleUrls: ['./add-collaborator.component.css']
})
export class AddCollaboratorComponent implements OnInit {

  constructor(private user: UserService, private form: FormBuilder) { }

  formUser: FormGroup;

  private CreateForm() {
    this.formUser = this.form.group({
      name: new FormControl("", [Validators.required, Validators.min(20)]),
      email: new FormControl("", [Validators.required, Validators.min(15), Validators.email]),
      pass: new FormControl("", [Validators.required, Validators.min(8)]),
      nick: new FormControl("", [Validators.required, Validators.min(5),Validators.max(15)]),
      role: new FormControl("", [Validators.required]),
      active: new FormControl("")
    });

  }

  ngOnInit(): void {

    this.CreateForm();
  }

  onSubmit() {
    let data: UserPost =
    {
      name: this.formUser.controls["name"].value,
      email: this.formUser.controls["email"].value,
      pass: this.formUser.controls["pass"].value,
      nick: this.formUser.controls["nick"].value,
      role: this.formUser.controls["role"].value,
      active: this.formUser.controls["active"].value,
    }

    this.user.post(data).subscribe(e => console.log(e))
  }

}
