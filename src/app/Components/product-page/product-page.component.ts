import { Component, OnInit, Input, ɵɵsetComponentScope } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Producto } from 'src/app/Model/product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public id : any;
  
  constructor(public productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();

    // subscribe to router event
    this.route.queryParams.subscribe((params: Params) => {      
      this.id= params['id'];
    });

  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
      },

      err =>{
        console.log(err);
      }
    )
  }

  isChosen(item:Producto): boolean {
    if(item.id==this.id) return true; else return false;
  }
}