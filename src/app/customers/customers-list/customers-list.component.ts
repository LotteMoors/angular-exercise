import { Component, OnInit, Input, signal } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime, map } from 'rxjs';
import { DataService } from '../../core/ data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
  customers: ICustomer[] = [];
  currencyCode: string = 'USD';
  filterForm: FormGroup = new FormGroup({
    searchFilter: new FormControl<string>(''),
  });
  filterFormSubsription: Subscription;
  searchFilter: string = '';


  constructor(
    private dataService: DataService,
    private sorterService: SorterService
  ) {}

  ngOnInit() {
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.customers = customers));

    this.filterFormSubsription = this.filterForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((changes) => {
        this.searchFilter = changes.searchFilter;
        console.info(changes)
      });
  }

  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
  }
}
