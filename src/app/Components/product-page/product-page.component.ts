import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var el = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(el, {
        swipeable: true,
      });
      
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators: false,
        fullWidth: false,
        dist: 0
      });
    });
  }  

}
