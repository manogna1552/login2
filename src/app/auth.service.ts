import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // postData = {
  //   test: 'my content',
  // };
  // url = `http://httpbin.org/post`;
  // json;
  
  constructor(private http:HttpClient) { 
    // this.http.post(this.url, this.postData).toPromise().then((data:any) => {
    //   console.log(data);
    //   console.log(data.json.test);
    //   this.json = JSON.stringify(data.json);
    // });
  }
  getUserDetails(email, password){
  
    const postData = {
      email1: email,
      password2 : password
    };
    return this.http.post(`http://httpbin.org/post`,postData).toPromise().then((data:any) => {
      //console.log(data);
      //console.log(data.json.email1);
     // console.log(data.json.password1);
  })
   //subscribe(data=>{
    // console.log(data,"login data from server")})
 
    }
  }

 
  
 
  

