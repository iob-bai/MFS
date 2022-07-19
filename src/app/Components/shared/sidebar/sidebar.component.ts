import { Component, OnInit } from '@angular/core';

// declare interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }

// export const ROUTES: RouteInfo[] = [
//   { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//   { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
//   { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
//   { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//   { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
//   { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
//   { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
//   { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
// ];



const navbarData = [
  {
    routeLink :'dashboard',icon:'dashboard',label: 'dashboard'
  },
  {
    routeLink :'users',icon:'supervised_user_circle',label: 'Users'
  },{
    routeLink :'student',icon:'face',label: 'Student'
  },
  {
    routeLink :'Login',icon:'date_range',label: 'Login'
  }
]







@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  collapsed = false;
  screeWidth =0;
  menuItems = navbarData;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
