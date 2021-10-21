import { FormsModule } from '@angular/forms';
/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
    selector : 'ng-app',
    template : `<form (submit)="onSubmit($event)">
                    <h2>Login</h2>
                    <br/>
                    <input type="email" (input) = getEmailInputValue($event) name="email"  required/>
                    <span *ngIf="email && !isValidEmail">Email is not valid</span>
                    <br/>
                    <input type="password" (input) = getPasswordInputValue($event)  name="password" required />
                    <span *ngIf="password && !isValidPassword">Password  must contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length</span>
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {
    emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    passwordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    email:string = "";
    password: string = "";
    isValidEmail: boolean = true;
    isValidPassword: boolean = true;


    logged_in = false;
    getEmailInputValue(event) {
       this.email = event.target.value;
    }
    getPasswordInputValue(event) {
       this.password = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.emailValidation.test(this.email));
        this.isValidEmail = this.emailValidation.test(this.email);
        this.isValidPassword = this.passwordValidation.test(this.password);
        this.logged_in = this.isValidEmail && this.isValidPassword ? true : false;
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};