import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { DefaultComponent } from './components/default/default.component';
import { AddCollaboratorComponent } from './components/add-collaborator/add-collaborator.component';
import { EditCollaboratorComponent } from './components/edit-collaborator/edit-collaborator.component';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ManagementRoutingModule } from './management-routing.module';
import { PoContainerModule, PoModule } from '@po-ui/ng-components';

import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';
@NgModule({
  declarations: [
    ManagementComponent,
    DefaultComponent,
    AddCollaboratorComponent,
    EditCollaboratorComponent,
    ViewTasksComponent,
    EditTaskComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    PoModule,
    PoContainerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagementModule { }
