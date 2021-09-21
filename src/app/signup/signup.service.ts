import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private http: HttpClient) {}

    /** POST request for user registration */
    signUpReq(data) {
        return this.http.post('https://jsonplaceholder.typicode.com/users', data).pipe(
            catchError((res: HttpErrorResponse) => {
                return throwError({msg: 'Something Went Wrong'});
            })
        );
    }
}