import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItem(productId) {
    return this.items[productId];
  }

  clearItem() {
    this.items = [];
    return this.items;
  }

  getShippingPrizes(){
    // console.log('getShippingPrizes called!');
    return this.http.get('../../assets/shipping.json');
  }
}
