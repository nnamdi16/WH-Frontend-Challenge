/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
    selector : 'textfield',
    template : '<input type="text" value=""  (input) = getInputValue($event) />'
})
export class TextField {
    @Output() field = new EventEmitter<string>()
 
    
    getInputValue(event) {
        this.field.emit(event.target.value);
    }
}


@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (field)="getValue($event)"></textfield>`
})
export class ChildComponent {
    @Output() title = new EventEmitter<string>()
    
    getValue(event) {
        this.title.emit(event)
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (title)="getValue($event)" ></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title: string = "";
    
    getValue(event) {
        this.title = event;
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module { };