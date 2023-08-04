import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { RouterModule } from '@angular/router';
import { UserTabComponent } from '../../user-tab/user-tab.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent,
    UserTabComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {path:'', component:UserTabComponent},
      {path:'/login', component:LoginComponent}
    ])
  ]
})
export class UserFunctionModule { }
