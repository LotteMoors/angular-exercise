import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';
import { FormGroup, FormControl } from '@angular/forms';
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
  filteredCustomers: ICustomer[] = [];
  currencyCode: string = 'USD';
  filterForm: FormGroup = new FormGroup({
    searchFilter: new FormControl<string>(''),
  });
  filterFormSubsription: Subscription;
  searchFilter: string = '';

  constructor(
    private dataService: DataService,
    private sorterService: SorterService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit() {
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.customers = customers));

    this.filterFormSubsription = this.filterForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((changes) => {
        this.searchFilter = changes.searchFilter;
      });
  }

  ngDoCheck() {
    this.filteredCustomers = this.filterPipe.transform(
      this.customers,
      ['name', 'city'],
      this.searchFilter
    );
  }

  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
  }
}
