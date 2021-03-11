import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardChildService } from 'src/services/auth-guard-child.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuardService } from '../services/role-guard.service'

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", 
  redirectTo: 'login', 
  pathMatch: 'prefix' },
  {
    path: "dashboard",
    canActivateChild: [AuthGuardChildService],
    canActivate: [RoleGuardService],
    data: {role: 'normal'},
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
