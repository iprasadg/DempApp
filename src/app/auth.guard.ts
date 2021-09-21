import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    /** To restrict the permission for routes if user is not registered */
    canActivate() {
        if(localStorage.getItem('registeredUser')) {
            return true
        }
        this.router.navigateByUrl('signup');
        return false;
    }
}