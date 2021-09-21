import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SignUpService } from "./signup.service";

@Component({
    selector: 'sign-up',
    templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    submitted = 0;

    constructor(private formBuilder: FormBuilder, private signUpSrv: SignUpService, private router: Router) {}

    ngOnInit() {
        /** Reactive form with controls */
        this.signUpForm = this.formBuilder.group({
            FirstName: ['', [Validators.required]],
            LastName: ['', [Validators.required]],
            Email: ['', [Validators.required, Validators.email]],
            PhNum: ['', [Validators.required]],
            Address: ['', [Validators.required]],
            Pwd: ['', [Validators.required]]
        })
    }

    /** For user registration */
    signUp() {
        this.submitted = 1;
        const formData = this.signUpForm.value;
        this.signUpSrv.signUpReq(formData).subscribe((res) => {
            this.submitted = 2;
            localStorage.setItem('registeredUser', 'true');
            this.router.navigateByUrl('/booklist')
        },(error) => {
            this.submitted = 3;
            console.log(error);
        })
    }

    /** To display different error messages for email */
    emialErr() {
        if (this.signUpForm.get('Email').hasError('required')) {
            return 'This field is required';
          }
      
        return this.signUpForm.get('Email').hasError('email') ? 'Not a valid email' : '';
    }
}