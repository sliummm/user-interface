import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pid: any
  productData:any
  quantity:number=1;

  constructor(
    private route: ActivatedRoute,
    private productDetail:ProductService,
    private cart:CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pid = params['id']; 
    });

    this.productDetail.getProductById(this.pid).subscribe(
      (data) => {
        this.productData = data
        console.log(this.productData)
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  onAddToCart(product:any){
    const item={...product, quantity:this.quantity}
    console.log(item);
    this.cart.addToCart(item);
    console.log(this.cart.cartItems)
  }
}