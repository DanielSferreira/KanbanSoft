import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './componentes/default/default.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'',component: DashboardComponent, children:[
    {path:'',component: DefaultComponent},
    {path:'tasks',component: TasksComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
