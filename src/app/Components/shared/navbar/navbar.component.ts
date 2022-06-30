import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() 
  toggelStat = new EventEmitter<String>();

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.getUser()
  }
    user?:User | null
  //color: ThemePalette ='primary'
  color !:string
  checked =true

  chgeClr() {
 
  }
  toggleChanges($event: MatSlideToggleChange) :void{
    this.toggelStat.emit($event.checked.toString());
    console.log("Toggle Event: " + $event.checked)
    this.checked =$event.checked    
  }

  //------------------------------------------
  logOut(){
    this.auth.logOut();
    window.location.reload();
  }
  //------------------------------------------
  getUser(){
    this.user = this.auth.getUserFromLocalCache();  
  }


  //------------------------------------------
  // chgeClr(color:string) :string{
  //   if (color == 'warn')
  //    color = 'primary'
  //   if (color == 'primary')
  //    color = 'warn'
  //    return color
  // } 
}
