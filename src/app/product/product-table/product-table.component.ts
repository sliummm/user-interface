import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  productsdata:any;

  constructor(
    private products:ProductService,
    private cart:CartService
    ){}

  ngOnInit(){
    this.products.getAllProducts().subscribe(
      (data) => {
        this.productsdata = data;
        console.log(this.productsdata)
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  onAddToCart(item:any){
    this.cart.addToCart(item);
  }
}
