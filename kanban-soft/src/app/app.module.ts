import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PoContainerModule, PoModule, PoListViewModule, PoPageModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { AccountComponent } from './pages/account/account.component';
import { AccountBarComponent } from './pages/account/shared/tool-bar/tool-account.component';
import { ToolBarComponent } from "./shared/tool-bar/tool-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ToolBarComponent,
    AccountBarComponent
  ],
  imports: [
    BrowserModule,
    PoPageLoginModule,
    PoTemplatesModule,
    PoToolbarModule,
    PoContainerModule,
    PoModule,
    PoListViewModule,
    PoPageModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
