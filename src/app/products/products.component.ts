import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/ data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  title: string = '';
  products: IProduct[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = 'Products';
    this.dataService
      .getAllProducts()
      .subscribe((data: any) => (this.products = data.products));
  }
}
