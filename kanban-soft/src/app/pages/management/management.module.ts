import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementRoutingModule } from 'src/app/pages/management/management-routing.module';

import { ManagementComponent } from 'src/app/pages/management/management.component';
import { DefaultComponent } from 'src/app/pages/management/components/default/default.component';
import { AddCollaboratorComponent } from 'src/app/pages/management/components/add-collaborator/add-collaborator.component';
import { EditCollaboratorComponent } from 'src/app/pages/management/components/edit-collaborator/edit-collaborator.component';
import { ViewTasksComponent } from 'src/app/pages/management/components/view-tasks/view-tasks.component';
import { EditTaskComponent } from 'src/app/pages/management/components/edit-task/edit-task.component';
import { ToolBarComponent } from 'src/app/pages/management/shared/tool-bar/tool-bar.component';

import { PoBreadcrumbModule, PoButtonModule, PoContainerModule, PoFieldModule, PoModalModule, PoModule, PoTableModule } from '@po-ui/ng-components';
import { ListCollaboratorsComponent } from './components/list-collaborators/list-collaborators.component';


@NgModule({
  declarations: [
    ManagementComponent,
    DefaultComponent,
    AddCollaboratorComponent,
    ListCollaboratorsComponent,
    EditCollaboratorComponent,
    ViewTasksComponent,
    EditTaskComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagementRoutingModule,
    
    PoModule,
    PoContainerModule,
    PoFieldModule,
    PoTableModule,
    PoButtonModule,
    PoBreadcrumbModule,
    PoModalModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagementModule { }
