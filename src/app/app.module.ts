import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { SidebarComponent } from './Components/shared/sidebar/sidebar.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { AdminLayoutComponent } from './Components/layouts/admin-layout/admin-layout.component';

import { SharedComponentModule } from './Components/Moduls/shared-component.module';

import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './Components/layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,

   

    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //NgMaterialModule,
    SharedComponentModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
