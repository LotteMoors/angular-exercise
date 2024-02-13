import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICustomer, IOrder } from '../shared/interfaces';
import { DataService } from '../core/ data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer | null;
  totalOrdersCost: number = 0;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;

    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer | null) => {
      this.customer = customer;
    });
  }
}
