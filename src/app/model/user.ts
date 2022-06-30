import { DataRowOutlet } from "@angular/cdk/table";

export class User {
    public userId: string;
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public lastLoginDate: Date;
    public lastLoginDateDisplay: Date;
    public joinDate: Date;
    public profileImageUrl: string;
    public active: boolean;
    public notLocked: boolean;
    public role: string;
    public authorities: [];
  
    constructor() {
      this.userId = '';
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.email = '';
      this.lastLoginDate = new Date();
      this.lastLoginDateDisplay = new Date();
      this.joinDate = new Date();
      this.profileImageUrl = '';
      this.active = false;
      this.notLocked = false;
      this.role = '';
      this.authorities = [];
    }
  
}
