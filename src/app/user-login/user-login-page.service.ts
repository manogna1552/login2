import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginPageService {

  

  constructor(private http : HttpClient, private router : Router) { }

  getUserDetails(email, password) {
    const postData = { email1: email, password2 : password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post( `https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, postData,
                            { headers: headers })
          .subscribe((data : any) => { 
                                       console.log(data);
                                       console.log(data.email1);
                                       console.log(data.password2);
                                       console.log(data.id);

                                       if(data.id == 4) {
                                        console.log(data.email1,"inside if");
                                          //this.router.navigate(["user", data.email1,data.id ]);
                                          this.router.navigate(["user", JSON.stringify(data)]);
                                        } 
                                       else {
                                          alert("Invalid credentials");
                                        }
                                      } )
                                    }
}
