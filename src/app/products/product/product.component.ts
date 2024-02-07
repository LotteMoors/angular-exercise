import { Component, OnInit } from '@angular/core';
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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.title = 'Product';
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService
      .getProductById(id)
      .subscribe((data: any) => (this.product = data));
  }
}
