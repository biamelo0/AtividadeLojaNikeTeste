import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private produtos: Iproduct []=[
    { id: 1, name: 'Nike Air Max 80', price: 50.00, description: 'Air Force 1 Low 07 white edição limitada', image:'./image.png'},
    { id: 2, name: 'Nike Air Force 270', price: 60.00, description: 'Air Force 1 Low 07 white edição limitada ', image:'./image copy.png'},
    { id: 3, name: 'Nike Air Force', price: 40.00, description: 'Air Force 1 Low 07 white edição limitada', image:'./image copy 2.png'},
  ];

  getProducts(): Iproduct[]{
    return this.produtos;
  }
}
