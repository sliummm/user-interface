import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserTabComponent } from './auth/user-tab/user-tab.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DeptNavComponent } from './home/dept-nav/dept-nav.component';
import { PluginAddComponent } from './home/plugin-add/plugin-add.component';
import { FeatureComponent } from './home/feature/feature.component';
import { CatNavComponent } from './product/cat-nav/cat-nav.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductDetailComponent } from './details/product-detail/product-detail.component';
import { OrderDetailComponent } from './details/order-detail/order-detail.component';
import { CartComponent } from './cart/cart.component';
import { SearchBarComponent } from './product/search-bar/search-bar.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserTabComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DeptNavComponent,
    PluginAddComponent,
    FeatureComponent,
    CatNavComponent,
    ProductTableComponent,
    SearchBarComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'user-function',
        component:UserTabComponent,
        children:
        [
          {path:'login',component:LoginComponent},
          {path:'signup',component:SignupComponent},
          {path:'', component:LoginComponent}
        ]
      },  
      {path:'home', component:HomeComponent},
      {path:'product',component:ProductComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


