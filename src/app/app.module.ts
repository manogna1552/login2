import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule } from  './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path : "",component:LoginPageComponent}]),
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
