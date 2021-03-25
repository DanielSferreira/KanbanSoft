import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../dashboard/componentes/default/default.component';
import { AccountComponent } from "./account.component";
const routes: Routes =
  [{
    path: '', component: AccountComponent, children: [
      { path: '', component: DefaultComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
