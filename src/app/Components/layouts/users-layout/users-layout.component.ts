import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},

];
@Component({
  selector: 'app-users-layout',
  templateUrl: './users-layout.component.html',
  styleUrls: ['./users-layout.component.css']
})
export class UsersLayoutComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'username', 'email', 'lastLoginDate', 'role'];
  dataSource = this.AllUsers;

//-------------------------------------
  private subscriptions: Subscription[] = [];
  user?:User |null
  AllUsers?:User[] |null
  //-------------------------------------
  constructor(private auth : AuthenticationService,private userService:UserService,private _snackBar:MatSnackBar) { }

//-----------------------------------------------------------------
  ngOnInit(): void {
    this.getUser()
  }
//-----------------------------------------------------------------
  getUser(){
    this.user = this.auth.getUserFromLocalCache();  
  }
  //-----------------------------------------------------------------
  public getUsers(showNotification :boolean): void {
    
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          //this.userService.addUsersToLocalCache(response);
          this.AllUsers = response;
         
          if (showNotification) {
            this.openSnackMessage('nice one')
          }
        },
        (errorResponse: HttpErrorResponse) => {
          this.openSnackMessage('lgaa : '+errorResponse.error.message);
        }
      )
    );

  }
  //-----------------------------------------------------------------
  updateUser(){}
  //-----------------------------------------------------------------
  deleteUser(){}
  //------------------------

  private openSnackMessage(message:string){
    this._snackBar.open(message,'',{duration:5000})
  }
}
