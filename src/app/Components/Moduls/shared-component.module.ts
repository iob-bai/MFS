import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgMaterialModule } from './ng-material.module';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

import { RouterModule } from '@angular/router';
import { CustumRoutingModule } from './custum-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherLayoutComponent } from '../pages/teacher-layout/teacher-layout.component';
import { StudentLayoutComponent } from '../pages/student-layout/student-layout.component';
import { UsersLayoutComponent } from '../pages/users-layout/users-layout.component';
import { ProfileComponent } from '../pages/users-layout/profile/profile.component';
import { UserSecurityPassComponent } from '../pages/users-layout/user-security-pass/user-security-pass.component';
import { DashboardLayoutComponent } from '../pages/dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    TeacherLayoutComponent,
    StudentLayoutComponent,
    UsersLayoutComponent,
    ProfileComponent,
    UserSecurityPassComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule.forChild(CustumRoutingModule),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports :[
    CommonModule,
    NgMaterialModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    StudentLayoutComponent,
    UsersLayoutComponent,
    HttpClientModule,
    ReactiveFormsModule,
    ProfileComponent
    
   
  ]
})
export class SharedComponentModule { }
