import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TasksComponent } from './componentes/tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from './componentes/default/default.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PoContainerModule, PoModule, PoListViewModule, PoPageModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    TasksComponent,
    DashboardComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    PoContainerModule,
    PoPageLoginModule,
    PoModule,
    PoTemplatesModule,
    PoListViewModule,
    PoPageModule,
    DashboardRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
