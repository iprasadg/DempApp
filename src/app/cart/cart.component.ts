import { error } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
    cartItems = [];
    constructor(private sharedSrv: SharedService) {}

    ngOnInit() {
        this.cartItems = this.sharedSrv.getCartItems();
    }
}