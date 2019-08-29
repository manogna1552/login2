import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {Observable} from 'rxjs';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // postData = {
  //   test: 'my content',
  // };
  // url = `http://httpbin.org/post`;
  // json;
  
  constructor(private http:HttpClient,private router: Router ) { 
    // this.http.post(this.url, this.postData).toPromise().then((data:any) => {
    //   console.log(data);
    //   console.log(data.json.test);
    //   this.json = JSON.stringify(data.json);
    // });
  }
  // res_email="";
  // res_password="";
  // res_id= 0;

  getUserDetails(email, password){
  
    const postData = {
      email1: email,
      password2 : password
    };
    return this.http.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,postData)
    .subscribe((data:any)=>{console.log(data);
      console.log(data.email1);
     console.log(data.password2);
     console.log(data.id);
     if(data.id == 4){
      this.router.navigate(["user"]);
      } else {
       alert("Invalid credentials");
      }
    })
  }
  
    //return this.http.post(`http://httpbin.org/post`,postData).toPromise().then((data:any) => {
      //console.log(data);
      //console.log(data.json.email1);
     // console.log(data.json.password1);
  //})
   //subscribe(data=>{
    // console.log(data,"login data from server")})
//    }
   
  }

 
  
 
  

