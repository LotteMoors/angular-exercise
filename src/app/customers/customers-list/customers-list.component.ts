import { Component, OnInit, signal } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { DataService } from '../../core/ data.service';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  providers: [FilterPipe],
})
export class CustomersListComponent implements OnInit {
  customers: ICustomer[] = [];
  totalOrders = signal<number>(0);
  currencyCode: string = 'USD';
  filterForm = this.formBuilder.group({
    searchFilter: '',
  });
  filterFormSubsription: Subscription;

  constructor(
    private dataService: DataService,
    private sorterService: SorterService,
    private formBuilder: FormBuilder,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit() {
    this.dataService.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      this.filterFormSubsription = this.filterForm.valueChanges
        .pipe(debounceTime(400))
        .subscribe((changes) => {
          this.customers = this.filterPipe.transform(
            customers,
            ['name', 'city'],
            changes.searchFilter
          );
          this.totalOrders.set(0);
          this.customers.forEach((customer) => {
            this.totalOrders.set(this.totalOrders() + customer.orderTotal);
          });
        });
    });
    this.filterFormSubsription?.unsubscribe();
  }

  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
  }
}
