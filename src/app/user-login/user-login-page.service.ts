import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginPageService {

  private handleError(errorResponse : HttpErrorResponse) {
    //client side or server error
    if(errorResponse.error instanceof ErrorEvent){
      console.error("client side error",errorResponse.error.message);
      alert("client side error,please try again");
    }else {
      console.error("Server side error",errorResponse);
      alert("server side error,please try again");
    }
    return throwError('there is problem with service');
  }

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
                                      },error =>{
                                        console.log(error,'inside ......');
                                        this.handleError(error);
                                      } )
                                    }
}
