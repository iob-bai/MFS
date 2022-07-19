import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';



export interface gridcards {
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-user-security-pass',
  templateUrl: './user-security-pass.component.html',
  styleUrls: ['./user-security-pass.component.css']
})


export class UserSecurityPassComponent implements OnInit {




  user?: User | null
  gridcards?: gridcards[];

  profileImageCard !: number[]
  profileDescriptionCard !: number[]
  constructor(private auth: AuthenticationService, private breakpointObserver: BreakpointObserver, private fb: FormBuilder) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.getUser()
  }

  // ------------------getUser------------------------------
  getUser() {
    this.user = this.auth.getUserFromLocalCache();   
  }
  // -----------------responsive---things----------------------------
  screenHeight?: number;
  screenWidth?: number;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: Event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (window.innerWidth > 1035 && window.innerHeight > 841) {
       console.log(this.screenWidth, this.screenHeight);
       this.profileImageCard =[1,2]
       this.profileDescriptionCard =[2,2]
       }else{
        this.profileImageCard =[2,2]
        this.profileDescriptionCard =[3,2]
       }
      
  }


  // ------------------------------------------------
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.profileImageCard = [3, 2];
        this.profileDescriptionCard = [3, 3]
        return

      }
      this.profileImageCard = [1, 2];
      this.profileDescriptionCard = [2, 2];
      return
      // if (matches) {
      //   return [
      //     { title: 'Card 1', cols: 3, rows: 2 },
      //     { title: 'Card 2', cols: 3, rows: 3 },
      //     { title: 'Card 3', cols: 1, rows: 1 },
      //     { title: 'Card 4', cols: 1, rows: 1 }
      //   ];
      // }

      // return [
      //   { title: 'Card 1', cols: 1, rows: 2 },
      //   { title: 'Card 2', cols: 2, rows: 1 },
      //   { title: 'Card 3', cols: 1, rows: 2 },
      //   { title: 'Card 4', cols: 1, rows: 1 }
      // ];
    })
  );
  // ------------------------------------------------

  // userForm !: FormGroup

  // intializeForm() {
  //   this.userForm = this.fb.group({
  //     userId: this.user?.userId
  //     firstName: this.user?.firstName
  //     lastName: this.user?.lastName
  //     username: this.user?.username
  //     email: this.user?.email
  //     lastLoginDateDisplay: this.user?.lastLoginDateDisplay
      
     
  //     active: this.user?.userId
  //     notLocked: this.user?.userId
  //     role: this.user?.userId
  //     authorities: this.user?.userId
  //   })
   
  // }

   //------------------------------------------------
}
