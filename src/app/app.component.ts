import { Component, OnInit } from '@angular/core';
import { UserstatusService } from './services/userstatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'user-interface';
  isCartOpen = false;

  openCart(isCartOpen:boolean){
    this.isCartOpen=isCartOpen;
  }
}
