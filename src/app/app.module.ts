import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyMaterialModule } from  './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { UserLoginModule } from './user-login/user-login.module';
import { UserLoginPageComponent } from './user-login/user-login-page/user-login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  {path : "user/:data", component : UserPageComponent},
                            {path : "login", component : UserLoginPageComponent}]),
    BrowserAnimationsModule,
    MyMaterialModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    UserLoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
