import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginSharedModule } from 'projects/login/src/app/app.module';
import { ShopSharedModule } from 'projects/shop/src/app/app.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes:Routes=[
  {path:'login', loadChildren:()=>import('../../projects/login/src/app/app.module').then(m=>m.LoginSharedModule)},
  {path:'shop', loadChildren:()=>import('../../projects/shop/src/app/app.module').then(m=>m.ShopSharedModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    LoginSharedModule.forRoot(),
    ShopSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


