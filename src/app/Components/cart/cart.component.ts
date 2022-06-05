import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService: ProductsService) {
  }
  

  ngOnInit(): void {
    this.getCartTotal();
  }

  getCartTotal() {
    return this.productService.getCartTotal();
  }
  
  getShipping() {
    if(this.getCartTotal()/10 > 5) return parseFloat((this.getCartTotal()/16).toFixed(2)); else return 0;
  }

  getTaxes() {
    return parseFloat((this.getCartTotal()*.12).toFixed(2));
  }

  getGrandTotal() {
    return parseFloat((this.getCartTotal()+this.getShipping()+this.getTaxes()).toFixed(2));
  }




}
