import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { Producto } from 'src/app/Model/product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-page-template',
  templateUrl: './product-page-template.component.html',
  styleUrls: ['./product-page-template.component.css']
})
export class ProductPageTemplateComponent implements OnInit {
  @Input() data:any;
  
  constructor(public productService: ProductsService) {
  }
  
  ngOnInit(): void {
    console.log(this.data);
  }

  addToCart (){
    this.productService.addToCart(this.data);
  }

  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var el = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(el, {
        swipeable: true,
      });
    });
  }
}
