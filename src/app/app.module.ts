import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponentModule } from './Components/Moduls/shared-component.module';

import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './Components/layouts/login-layout/login-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';

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
  providers: [AuthenticationGuard,{provide :HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true/*create multiple instences*/}],
  bootstrap: [AppComponent]
})
export class AppModule { }
