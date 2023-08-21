import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @Output() newCartEvent = new EventEmitter<boolean>();
  isCartOpen = true;

  onCloseCart(){
    this.isCartOpen=!this.isCartOpen;
    this.newCartEvent.emit(this.isCartOpen);
  }
}
