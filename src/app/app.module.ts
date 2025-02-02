import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DomainComponent } from './domain/domain.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    DomainComponent,
    ManageUsersComponent,
    ForgotPasswordComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    KeyFilterModule,
    AutoCompleteModule,
    TableModule,
    CardModule,
    ReactiveFormsModule,
    RouterModule,
    InputGroupAddonModule ,
    InputGroupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
