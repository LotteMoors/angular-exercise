import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/ data.service';
import { IProduct } from '../../shared/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  title: string = '';
  products: IProduct[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = 'Product';
    this.dataService
      .getAllProducts()
      .subscribe((data: any) => (this.products = data.products));
  }
}
