import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { LoginComponent } from './routing/login/login.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';
import { RegisterComponent } from './routing/register/register.component';
import { LoginGuardService } from './routing/service/login-guard.service';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'dashboard/:emailId', component: DashboardComponent, canActivate: [LoginGuardService]},
  {path: '**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
