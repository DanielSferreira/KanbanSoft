import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})
export class EditCollaboratorComponent implements OnInit {

  order: string;
  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private form: FormBuilder
  ) { }

  @ViewChild("modal") modal;

  formEdit: FormGroup;
  private CreateForm(e) {
    this.formEdit = this.form.group({
      id: new FormControl(e.id === undefined ? "" : e.id),
      name: new FormControl(e.name === undefined ? "" : e.name, [Validators.required, Validators.min(20)]),
      email: new FormControl(e.email === undefined ? "" : e.email, [Validators.required, Validators.min(15), Validators.email]),
      //pass: new FormControl(e.pass === undefined ? "" : e.pass,[Validators.required]),
      nick: new FormControl(e.nick === undefined ? "" : e.nick, [Validators.required, Validators.min(5), Validators.max(15)]),
      role: new FormControl(e.role === undefined ? "" : e.role, [Validators.required])
    });

  }
  ngOnInit() {
    this.CreateForm("");
    this.route.queryParams.subscribe(params => {
      this.user.GetUser(parseInt(params.id)).subscribe(e => {
        console.log(e);

        this.CreateForm(e)
      })
    }
    );
  }

  OpenModalPass() {
    this.modal.open();
  }
  newPass(pass, cPass) {
    console.log(pass, cPass)
    if (pass === cPass) {
      let data = {
        
        id: this.formEdit.controls["id"].value,
        newPass: pass
      }
      console.log(data)
      this.user.UpdatePasswordByAdmin(data).subscribe(e => console.log(e), err => console.log(err));
    }
  }
  public Edit() {
    this.user.putData(this.formEdit.value).subscribe(e => console.log(e))
  }

}
