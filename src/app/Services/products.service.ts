import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  products: Producto[] = [];
  cart_items: Producto[] = [];
  saved: any;

  constructor(private http:HttpClient) {
    this.cart_items=[];
  }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  getProductFromId(id:any) {
    return this.getProducts().subscribe(products => this.products = products);
  }

  getCart() {
    return this.cart_items = JSON.parse(localStorage.getItem('cart') || '{}');
  }

  addToCart(item:Producto) {
    item.cart_qty=1;

    if(localStorage.getItem('cart')==null) {
      this.cart_items?.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart_items));
    } else {
      this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
      if(this.isDuplicated(item.id)) {
        this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
        this.cart_items[this.isDuplicatedId(item.id)].cart_qty++;
        localStorage.setItem('cart', JSON.stringify(this.cart_items));
      } else {
          this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
          this.cart_items?.push(item);
          localStorage.setItem('cart', JSON.stringify(this.cart_items));
      }
    }
  }

  isDuplicated(id:any) {
    for(var i=0; i<=this.cart_items?.length-1; i++) {
      if(id==this.cart_items[i].id) {
        return true;
      }
    }
    return false;
  }

  isDuplicatedId(id:any) {
    for(var i=0; i<=this.cart_items?.length-1; i++) {
      if(id==this.cart_items[i].id) {
        return i;
      }
    }
    return 0;
  }

  setQty (item:Producto, qty:number){
    if(qty<=0) qty=1;

    this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
    this.cart_items[this.isDuplicatedId(item.id)].cart_qty=qty;
    localStorage.setItem('cart', JSON.stringify(this.cart_items));
  }

  deleteItem (item:Producto) {
    this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
    this.cart_items.splice(this.isDuplicatedId(item.id),1);
    localStorage.setItem('cart', JSON.stringify(this.cart_items));
  }

  getCartTotal(){
    this.cart_items = JSON.parse(localStorage.getItem('cart') ||'{}');
    var total =0;
    
    for(var i=0; i<=this.cart_items?.length-1; i++) {
      total=total+parseInt(this.cart_items[i].precio)*this.cart_items[i].cart_qty;
    }
    
    return parseFloat(total.toFixed(2));
  }

}
