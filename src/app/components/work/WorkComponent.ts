import { Component, OnInit } from '@angular/core';
import { WorkComponentController } from './WorkComponentController';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'work-component',
    templateUrl: './WorkComponent.html',
    styleUrls: ['./WorkComponent.css'],
    providers: [ WorkComponentController ]
})
// tslint:disable-next-line:component-class-suffix
export class WorkComponent implements OnInit {

    constructor(public controller: WorkComponentController) {  }

    ngOnInit() {
    }
}
