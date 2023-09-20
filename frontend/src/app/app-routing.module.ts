import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CrudComponent } from './components/crud/crud.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailsProdComponent } from './components/details-prod/details-prod.component';

// Guards
import { authGuard } from './utils/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'add',
    component: CrudComponent,
    canActivate: [authGuard],
    data: { role: 'vendedor' },
  },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: 'edit/:id',
    component: CrudComponent,
    canActivate: [authGuard],
    data: { role: 'vendedor' },
  },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'detailsProd', component: DetailsProdComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { role: 'vendedor' },
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
