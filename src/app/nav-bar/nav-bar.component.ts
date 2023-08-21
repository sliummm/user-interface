import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserstatusService } from '../services/userstatus.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Output() newCartEvent = new EventEmitter<boolean>();
  isCartOpen = false;
  isLoginedIn = false

  constructor(private status:UserstatusService){}

  ngOnInit(){
    this.isLoginedIn = this.status.uid
  }

  onOpenCart(){
    this.isCartOpen=!this.isCartOpen;
    this.newCartEvent.emit(this.isCartOpen);
  }
}
