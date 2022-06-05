import { Component, Input, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: any;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

  setQty() {
    this.productService.setQty(this.product, parseInt((document.getElementById(this.product.id) as HTMLInputElement).value));
  }

  deleteItem() {
    this.productService.deleteItem(this.product);
  }

}
