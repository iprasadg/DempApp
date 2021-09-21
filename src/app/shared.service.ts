import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    cartItems = [];
    constructor() {}

    addToCart(bookData) {
        this.cartItems.push(bookData);
    }

    getCartItems() {
        return this.cartItems;
    }
}