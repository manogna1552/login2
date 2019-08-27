import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule } from  './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path : "login", component : LoginPageComponent},{path : "user", component : UserPageComponent}]),
    BrowserAnimationsModule,
    MyMaterialModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
