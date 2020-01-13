import { Component, OnInit } from "@angular/core";
import { CartService } from "../Services/cart.service";
import{PracticeService} from '../practice.service';

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingPrices;
  constructor(private cart: CartService) {}

  ngOnInit() {    
    this.shippingPrices = this.cart.getShippingPrizes();
  }
}
