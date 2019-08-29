import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string;
  password: string;
  
  //@Input() error: string | null;
  constructor(private router: Router , private Auth:AuthService) { }

  ngOnInit() {
  }

  login():void{
    this.Auth.getUserDetails(this.email,this.password)
    //2//this.Auth.getUserDetails(this.email,this.password)
  }
  
  // login() : void {
  //   if(this.email == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
      
  //     alert("Invalid credentials");
  //   }
  // }

}
