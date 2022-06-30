import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLayoutComponent } from '../layouts/teacher-layout/teacher-layout.component';
import { StudentLayoutComponent } from '../layouts/student-layout/student-layout.component';
import { UsersLayoutComponent } from '../layouts/users-layout/users-layout.component';
import { LoginLayoutComponent } from '../layouts/login-layout/login-layout.component';


export const CustumRoutingModule: Routes = [
  
  {path : 'users',component: UsersLayoutComponent,pathMatch: 'full'},
  {path : 'teacher',component: TeacherLayoutComponent,pathMatch: 'full'},
  {path : 'student',component: StudentLayoutComponent,pathMatch: 'full'},
  
];
