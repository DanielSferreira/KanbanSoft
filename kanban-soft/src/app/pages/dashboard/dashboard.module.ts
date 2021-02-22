import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TasksComponent } from './componentes/tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from './componentes/default/default.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PoContainerModule, PoModule, PoListViewModule, PoPageModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { PoTabsModule } from '@po-ui/ng-components';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { PoBreadcrumbModule } from '@po-ui/ng-components';
import { NewTaskComponent } from './componentes/new-task/new-task.component';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { MyTasksComponent } from './componentes/my-tasks/my-tasks.component';
import { QuestionsComponent } from './componentes/questions/questions.component';
@NgModule({
  declarations: [
    TasksComponent,
    DashboardComponent,
    DefaultComponent,
    TarefasComponent,
    NewTaskComponent,
    MyTasksComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    PoContainerModule,
    PoPageLoginModule,
    PoModule,
    PoTemplatesModule,
    PoListViewModule,
    PoPageModule,
    PoTabsModule,
    DashboardRoutingModule,
    PoBreadcrumbModule,
    PoFieldModule,
    PoButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
