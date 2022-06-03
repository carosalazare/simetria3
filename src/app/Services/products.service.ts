import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  products: producto[] | undefined;

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<producto[]>(this.API_URL);
  }
}
