import { Component, OnInit } from '@angular/core';
import { OrderPlacementService } from '../services/order-placement.service';
import { UserstatusService } from '../services/userstatus.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  orders:any;

  constructor(
    private orderService: OrderPlacementService,
    private userState:UserstatusService
  ){}

  ngOnInit(){
    if (this.userState.authStatus) {
      this.orderService.getOrdersByUid(this.userState.user._id).subscribe(
        (data) => {
          this.orders=data
          console.log(this.orders[0])
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      )
    }
  }
}
