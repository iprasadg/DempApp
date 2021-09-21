import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    cartItems = [];
    constructor() {}

    /** To add book into cart */
    addToCart(bookData) {
        this.cartItems.push(bookData);
    }

    /** To get cart items */
    getCartItems() {
        return this.cartItems;
    }
}