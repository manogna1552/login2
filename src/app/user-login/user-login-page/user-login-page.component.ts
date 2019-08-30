import { Component, OnInit } from '@angular/core';
import { UserLoginPageService } from '../user-login-page.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  constructor(private userLoginPageService: UserLoginPageService) { }

  ngOnInit() {
  }

  email : string;
  password : string;

  login() : void  {
    this.userLoginPageService.getUserDetails(this.email, this.password)
  }

}
