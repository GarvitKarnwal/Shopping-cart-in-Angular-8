import { Component, OnInit } from "@angular/core";
import { CartService } from "../Services/cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cart: CartService, private formBuilder: FormBuilder) {
    this.items = this.cart.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {}

  onSubmit(formData) {
    // console.log("Form data" + JSON.parse(formData));
     console.log('Your order has been submitted', formData);
    this.items = this.cart.clearItem();
    this.checkoutForm.reset();
  }
}
