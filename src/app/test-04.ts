/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>    
                    <!-- <label for="fname">First name:</label><br> -->
                    <input type="text" (change) =  getFirstName($event) id="fname" name="fname" placeholder="Firstname">
                    <!-- <label for="lname">Last name:</label><br> -->
                    <input type="text" (change) =  getLastName($event) id="lname" name="lname" placeholder="Lastname">
                    <span *ngIf="this.showUsername">{{this.username}}</span>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    firstName: string = "";
    lastName: string = "";
    username: string = "";
    showUsername: boolean = false
    getFirstName(event) {
        this.firstName = event.target.value;
    }

    getLastName(event) {
        if (this.firstName) {
           this.showUsername  = true
           this.lastName = event.target.value;
           this.username = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_${Math.floor(Math.random()*8) + 1}`
        }
    }

}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};