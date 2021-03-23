import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCollaboratorComponent } from 'src/app/pages/management/components/add-collaborator/add-collaborator.component';
import { DefaultComponent } from 'src/app/pages/management/components/default/default.component';
import { EditCollaboratorComponent } from 'src/app/pages/management/components/edit-collaborator/edit-collaborator.component';
import { EditTaskComponent } from 'src/app/pages/management/components/edit-task/edit-task.component';
import { ViewTasksComponent } from 'src/app/pages/management/components/view-tasks/view-tasks.component';
import { ManagementComponent } from 'src/app/pages/management/management.component';
import { ListCollaboratorsComponent } from './components/list-collaborators/list-collaborators.component';

const routes: Routes = [
  {
    path: '', component: ManagementComponent, children: [
      { path: '', component: DefaultComponent },
      { path: 'newColab', component: AddCollaboratorComponent },
      { path: 'listColab', component: ListCollaboratorsComponent },
      { path: 'editColab', component: EditCollaboratorComponent },
      { path: 'tasks', component: ViewTasksComponent },
      { path: 'editTasks', component: EditTaskComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
