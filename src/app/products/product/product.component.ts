import { Component, OnInit, signal } from '@angular/core';
import { DataService } from '../../core/ data.service';
import { IProduct } from '../../shared/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  title: string = '';
  product: IProduct;
  openModal = signal(false);

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService
      .getProductById(id)
      .subscribe(
        (data: any) => ((this.product = data), console.info(this.product))
      );
  }

  closeModal() {
    this.openModal.set(false);
  }

  toggleModal() {
    this.openModal.update((c) => !c);
  }

  updateProduct(product: IProduct) {
    console.info(product);
    this.product = product;
  }
}
