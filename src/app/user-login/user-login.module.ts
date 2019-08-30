import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';

import { MyMaterialModule } from '../material.module';



@NgModule({
  declarations: [UserLoginPageComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    MyMaterialModule
  ]
})
export class UserLoginModule { }
