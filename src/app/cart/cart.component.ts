import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
    cartItems = [];
    constructor(private sharedSrv: SharedService) {}

    /** To get cart items */
    ngOnInit() {
        this.cartItems = this.sharedSrv.getCartItems();
    }
}