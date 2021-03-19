import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardChildService } from 'src/services/auth-guard-child.service';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuardService } from '../services/role-guard.service'
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "account", component: AccountComponent },
  {
    path: "",
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: "dashboard",
    canActivateChild: [AuthGuardChildService],
    canActivate: [RoleGuardService],
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "admin",
    canActivateChild: [AuthGuardChildService],
    canActivate: [RoleGuardService],
    loadChildren: () => import("./pages/management/management.module").then(m => m.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
