import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserstatusService } from '../services/userstatus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Output() newCartEvent = new EventEmitter<boolean>();
  isCartOpen = false;
  isLoginedIn = false

  constructor(
    private status:UserstatusService,
    private router:Router
    ){ }

  ngOnInit(){
    this.status.authStatus.subscribe(status => {
      this.isLoginedIn = status;
    });
  }

  onLogout(){
    this.status.user = null
    this.isLoginedIn = false
    console.log(this.status.user)
    this.status.logout();
    this.router.navigate(['/home'])
  }

  onOpenCart(){
    this.isCartOpen=!this.isCartOpen;
    this.newCartEvent.emit(this.isCartOpen);
  }
}
