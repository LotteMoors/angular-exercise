import { Component, OnInit, computed, signal } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/ data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title: string = '';
  products: IProduct[] = [];
  openModal = signal(false);

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.title = 'Products';
    this.dataService
      .getAllProducts()
      .subscribe((data: any) => (this.products = data.products));
  }

  closeModal() {
    this.openModal.set(false);
  }

  toggleModal() {
    this.openModal.update((c) => !c);
  }
}
