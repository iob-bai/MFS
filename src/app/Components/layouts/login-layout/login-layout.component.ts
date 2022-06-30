import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { HeaderType } from 'src/app/enum/header-type.enum';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private authenticationService:AuthenticationService,
              private _snackBar: MatSnackBar,
              private router: Router) { }


  ngOnInit(): void {
    this.intializeForm();
  }
  private subscriptions: Subscription[] = [];
  showLoading  = false
  registerForm !: FormGroup
  logInForm !: FormGroup
  
//----------Form------------------------------------
intializeForm(){
  this.registerForm = this.fb.group({
    firstName :'',
    lastName :'',
    username :'',
    email :'',
  })
  //------------------------------------------------
  this.logInForm = this.fb.group({
    username :'',
    password :'',
    })

}
//------------------onsubmit----------------------------
onsubmit():void{
  console.log(this.registerForm)
}


  //-------------------onRegister---------------------------
  public onRegister(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe(
        (response: User) => {
          this.showLoading = false;
          console.log('back respense: '+ response.username);
          
          this.openSnackMessage("you've registred,check up your mail")
        },
        (errorResponse: HttpErrorResponse) => {
         
          this._snackBar.open(errorResponse.error.message)
          this.showLoading = false;
        }
      )
    );
  }


  //-------------onLogin---------------------------------
  public onLogin(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<User>) => {
          const token = response.headers.get(HeaderType.JWT_TOKEN);
          this.authenticationService.saveToken(token!);
          this.authenticationService.addUserToLocalCache(response.body!);
          //this.router.navigateByUrl('/user/management');
          this.router.navigate(['/AdminLayout']);
          console.log(response.body);
          
          this.openSnackMessage("welcom back "+response.body?.username)
         
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
         // this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
         this.router.navigateByUrl('/user');
         this.openSnackMessage(errorResponse.error.message)
         this.showLoading = false;
        }
      )
    );
  }


  private openSnackMessage(message:string){
    this._snackBar.open(message,'',{duration:5000})
  }








}
