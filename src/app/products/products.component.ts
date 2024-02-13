import { Component, OnInit, signal } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/ data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title: string = '';
  products: IProduct[] = [];
  openModal = signal<boolean>(false);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = 'Products';
    this.dataService
      .getAllProducts()
      .subscribe((data: any) => (this.products = data.products));
  }

  toggleModal() {
    this.openModal.set(!this.openModal());
    console.log(this.openModal());
  }
}
