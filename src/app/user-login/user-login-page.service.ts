import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginPageService {

  

  constructor(private http : HttpClient, private router : Router) { }

  getUserDetails(email, password) {
    const postData = { email1: email, password2 : password };

    return this.http.post( `https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, postData)
          .subscribe((data : any) => { console.log(data);
                                       console.log(data.email1);
                                       console.log(data.password2);
                                       console.log(data.id);
                                       if(data.id == 4) {
                                          this.router.navigate(["user"]);
                                        } 
                                       else {
                                          alert("Invalid credentials");
                                        }
                                      } )
                                    }
}
