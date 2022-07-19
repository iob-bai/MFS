import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from '../pages/users-layout/users-layout.component';
import { TeacherLayoutComponent } from '../pages/teacher-layout/teacher-layout.component';
import { StudentLayoutComponent } from '../pages/student-layout/student-layout.component';
import { DashboardLayoutComponent } from '../pages/dashboard-layout/dashboard-layout.component';



export const CustumRoutingModule: Routes = [
  
  {path : 'users',component: UsersLayoutComponent,pathMatch: 'full'},
  {path : 'teacher',component: TeacherLayoutComponent,pathMatch: 'full'},
  {path : 'student',component: StudentLayoutComponent,pathMatch: 'full'},
  {path : 'dashboard',component: DashboardLayoutComponent,pathMatch: 'full'},
  
];
