import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';


export interface Tabs {
  label: string;
  content: string ;
 }



@Component({
  selector: 'app-users-layout',
  templateUrl: './users-layout.component.html',
  styleUrls: ['./users-layout.component.css']
})
export class UsersLayoutComponent implements OnInit {

  //displayedColumns: string[] = ['id', 'userId', 'firstName', 'lastName', 'username', 'lastLoginDateDisplay', 'email'];
  // dataSource = new MatTableDataSource(this.AllUsers);

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

//-------------------------------------
  tabs : Tabs[] = [
                {label: 'Profie',content : '<app-profile></app-profile>'},
                {label: 'Billing',content : '<h1> Simple card</h1>'},
                {label: 'security',content : '<app-user-security-pass></app-user-security-pass>'},
                {label: 'notification',content : ' Simple card'},
                ]
  private subscriptions: Subscription[] = [];
  user?:User |null 
  AllUsers?:User[] 
  //-------------------------------------
  constructor(private auth : AuthenticationService,private userService:UserService,private _snackBar:MatSnackBar) { }

//-----------------------------------------------------------------
  ngOnInit(): void {
    this.getUser()
    this.getUsers(false);
  }
//-----------------------------------------------------------------
  getUser(){
    this.user = this.auth.getUserFromLocalCache();  
    const el = document.createElement('div'); 
    console.log('typeof'+typeof(el.ELEMENT_NODE));
  }
  //-----------------------------------------------------------------
  public getUsers(showNotification :boolean): void {
    
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          //this.userService.addUsersToLocalCache(response);
          this.AllUsers = response;
          console.log(response);
          
          
         
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
    this._snackBar.open(message,'',{duration:3000})
  }



}
