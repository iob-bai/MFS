import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private authenticationService:AuthenticationService,
              private router:Router,
              private _snackBar: MatSnackBar,
              ){}
//==========================================
canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.isUserLoggedIn();
}
  //==========================================
  private isUserLoggedIn(): boolean {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/Login']);
    this.openSnackMessage( `You need to log in to access that page`);
    return false;
  }
  private openSnackMessage(message:string){
    this._snackBar.open(message,'',{duration:5000})
  }

}
