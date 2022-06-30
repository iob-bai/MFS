import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  toggle =true;
  constructor() { }

  ngOnInit(): void {

  }
  toggle_navbar() {
    this.toggle = !this.toggle;
  }
  receiveFromNave(event: any) {
    console.log('hola , we have received :' + event);
    this.toggle = event;
  }
}
