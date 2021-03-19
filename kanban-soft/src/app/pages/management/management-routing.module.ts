import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { ManagementComponent } from './management.component';
const routes: Routes = [
{  path: '', component: ManagementComponent, children: [
  { path: '', component: DefaultComponent },

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
