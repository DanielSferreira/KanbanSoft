import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from 'src/services/login-service.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private login: LoginServiceService
  ) { }

  @ViewChild("modal") modal;

  formEdit: FormGroup;
  private CreateForm(e) {
    this.formEdit = this.form.group({
      id: new FormControl(e.id === undefined ? "" : e.id),
      name: new FormControl(e.name === undefined ? "" : e.name, [Validators.required, Validators.min(20)]),
      email: new FormControl(e.email === undefined ? "" : e.email, [Validators.required, Validators.min(15), Validators.email]),
      nick: new FormControl(e.nick === undefined ? "" : e.nick, [Validators.required]),
      role: new FormControl(e.role === undefined ? "" : e.role, [Validators.required])
    });

  }
  ngOnInit() {
    this.CreateForm("");
      this.user.GetUser(this.login.GetUser()).subscribe(e =>
        this.CreateForm(e)
      )
  }

  OpenModalPass() {
    this.modal.open();
  }
  newPass(aPass, pass, cPass) {
    if (pass === cPass) {
      let data = {
        id: this.formEdit.controls["id"].value,
        prevPass: aPass,
        newPass: pass
      }
      this.user.UpdatePasswordByUser(data).subscribe(e => console.log(e), err => console.log(err));
    }
  }
  public Edit() {
    this.user.putData(this.formEdit.value).subscribe(e => console.log(e))
  }

}
