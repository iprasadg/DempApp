import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared.service";
import { BookListService } from "./booklist.service";

@Component({
    selector: 'book-list',
    templateUrl: './booklist.component.html'
})

export class BookListComponent implements OnInit {
    bookList = [];
    adddedToCart = [];
    constructor(private bookListSrv: BookListService, private sharedSrv: SharedService, private router: Router) {}

    ngOnInit() {
        this.bookListSrv.getBookList().subscribe((res: any) => {
            this.bookList = res;
            this.adddedToCart = Array.from({ length: this.bookList.length }).fill('Add to Cart');
            const cartItems = this.sharedSrv.getCartItems();
            if(cartItems.length) {
                cartItems.forEach((item, i) => {
                    this.adddedToCart[item['index']] = 'Go to Cart';
                })
            }
        },(error) => {
            console.log(error);
        })
    }

    /** To add item in cart */
    cart(book: Object, index: number) {
        if(this.adddedToCart[index] !== 'Go to Cart') {
            book['index'] = index;
            this.sharedSrv.addToCart(book);
        } else {
            this.router.navigateByUrl('cart');
        }
        this.adddedToCart[index] = 'Go to Cart'; 
    }
}