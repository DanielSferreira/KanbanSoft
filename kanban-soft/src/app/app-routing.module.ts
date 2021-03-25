import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardChildService } from 'src/roles/auth-guard-child.service';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuardService } from 'src/roles/role-guard.service'
import { AuthAdminGuardService } from 'src/roles/auth-admin-guard.service';

const routes: Routes = [
  { path: "login", component: LoginComponent },
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
    canActivateChild: [AuthAdminGuardService],
    loadChildren: () => import("./pages/management/management.module").then(m => m.ManagementModule)
  },
  {
    path: "account",
    canActivate: [RoleGuardService],
    loadChildren: () => import("./pages/account/account.module").then(m => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
