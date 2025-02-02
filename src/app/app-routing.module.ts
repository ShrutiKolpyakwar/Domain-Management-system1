import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your login component
import { RegistrationComponent } from './registration/registration.component'; // Import your registration component
import { DashboardComponent } from './dashboard/dashboard.component';
import {DomainComponent} from './domain/domain.component';
import { ManageUsersComponent } from './manage-users/manage-users.component'; 
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; // Import your ForgotPasswordComponent


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login as default
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // Ensure you have a login route
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'domain',component: DomainComponent},
  { path: 'manage-users', component: ManageUsersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'domain', component: DomainComponent },  // Default or listing page
  { path: 'domain/add', component: DomainComponent, data: { isAddMode: true } },  // Add mode
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
