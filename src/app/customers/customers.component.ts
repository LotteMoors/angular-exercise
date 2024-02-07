import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/ data.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];

    constructor() {}

    ngOnInit() {
        this.title = 'Customers';
    }
}
