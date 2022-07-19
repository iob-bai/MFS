import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Components/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './Components/layouts/login-layout/login-layout.component';

import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes =[
  { path: '', redirectTo: '/AdminLayout', pathMatch: 'full' },
  {path : 'Login',component: LoginLayoutComponent},
  {
    path: 'AdminLayout',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./Components/Moduls/shared-component.module')
      .then(m => m.SharedComponentModule),
      canActivate: [AuthenticationGuard]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
