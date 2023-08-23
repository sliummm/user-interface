import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserstatusService } from '../services/userstatus.service';
import { Router } from '@angular/router';
import { OrderPlacementService } from '../services/order-placement.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @Output() newCartEvent = new EventEmitter<boolean>();
  isCartOpen = true;
  cartItems:any;
  subtotal:number= 0;
  canCheckOut=false;
  checkOutClicked=false;

  constructor(
    private cart: CartService,
    private userState:UserstatusService,
    private router:Router,
    private order:OrderPlacementService
    ){}

  ngOnInit(){
    this.cartItems = this.cart.cartItems
    console.log(this.cartItems)
    this.cartItems.map((item:any)=>{
      this.subtotal = this.subtotal + (item.product_price * item.quantity)
    })
  }

  onRemoveItem(i:any){
    this.subtotal = this.subtotal-this.cartItems[i].product_price;
    this.cart.removeFromCart(i);
  }

  onCloseCart(){
    this.isCartOpen=!this.isCartOpen;
    this.newCartEvent.emit(this.isCartOpen);
  }

  onCheckOut(){
    this.userState.authStatus.subscribe(status => {
      this.canCheckOut = status;
    });
    if(this.canCheckOut){
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const placedOrder = {
        order_id:this.generateOrderId(),
        order_client:this.userState.user._id,
        order_status:"In Progress",
        order_date:date,
        order_total:this.subtotal,
        order_items:this.cartItems
      }
      this.order.placeAnOrder(placedOrder);
      this.onCloseCart()
      this.router.navigate(['/order'])
    }else{
      this.onCloseCart()
      this.router.navigate(['/user-function/signup'])
    }
  }

  generateOrderId(){
    const timestamp = Date.now(); 
    const randomFraction = Math.random(); 
    const randomValue = Math.floor((randomFraction * timestamp) / 1000); 
    return randomValue;
  }
}
