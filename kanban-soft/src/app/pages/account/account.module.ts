import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PoBreadcrumbModule, PoButtonModule, PoContainerModule, PoFieldModule, PoModalModule, PoModule, PoTableModule } from '@po-ui/ng-components';
import { AccountComponent } from './account.component';
import { AccountBarComponent } from './shared/tool-bar/tool-account.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    AccountComponent,
    AccountBarComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PoBreadcrumbModule,
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoModalModule,
    PoModule,
    PoTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
