import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';









@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  user?:User |null 
  profilImg ?:string 
  coverImg ?:string 
  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.getUser()
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  getUser(){
    this.user = this.auth.getUserFromLocalCache();  
    this.userProfileImg(this.user?.profileImageUrl)   
  }

userProfileImg(urlImg?:string){
  this.profilImg =  `background-image:url(' ${urlImg}') ;
                     background-repeat: no-repeat;
                     background-size: cover;
                     `

}
}
