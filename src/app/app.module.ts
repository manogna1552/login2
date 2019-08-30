import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyMaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { LendingPageComponent } from './lending-page/lending-page.component';
import { HorizontalNavModule } from './module/horizontal-nav/horizontal-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
    DashboardComponent,
    LendingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path : "login", component : LoginPageComponent},{path : "user", component : UserPageComponent}]),
    BrowserAnimationsModule,
    MyMaterialModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    HorizontalNavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
