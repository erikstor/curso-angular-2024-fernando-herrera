import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {AuthRoutingModule} from "./auth-routing.module";

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule {
}
