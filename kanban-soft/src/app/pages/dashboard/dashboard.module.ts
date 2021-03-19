import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from'@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { TasksComponent } from './componentes/tasks/tasks.component';
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from './componentes/default/default.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { NewTaskComponent } from './componentes/new-task/new-task.component';
import { MyTasksComponent } from './componentes/my-tasks/my-tasks.component';
import { QuestionsComponent } from './componentes/questions/questions.component';
import { ColunaGradeComponent } from './shared/coluna-grade/coluna-grade.component';

import { PoContainerModule, PoModule, PoListViewModule, PoPageModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoTabsModule } from '@po-ui/ng-components';
import { PoBreadcrumbModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { PoTagModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoGridModule } from '@po-ui/ng-components';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';
import { PoChartModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    TasksComponent,
    DashboardComponent,
    DefaultComponent,
    TarefasComponent,
    NewTaskComponent,
    MyTasksComponent,
    QuestionsComponent,
    ColunaGradeComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    PoModule,
    PoContainerModule,
    PoTemplatesModule,
    PoListViewModule,
    PoPageModule,
    PoTabsModule,
    PoBreadcrumbModule,
    PoFieldModule,
    PoButtonModule,
    PoTagModule,
    PoTableModule,
    PoModalModule,
    PoGridModule,
    PoChartModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
