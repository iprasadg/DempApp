import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class BookListService {
    constructor(private http: HttpClient) {}

    /** GET request for book list */
    getBookList() {
        return this.http.get('http://localhost:4200/assets/booklist.json').pipe(
            catchError((res: HttpErrorResponse) => {
                return throwError({msg: 'Something Went Wrong'});
            })
        );
    }
}