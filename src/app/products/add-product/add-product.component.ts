import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../core/ data.service';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProductForm = this.formBuilder.group({
    title: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
  });
  productFormSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  submitProduct() {
    this.productFormSubscription = this.addProductForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((changes) => {
        this.dataService.setProduct(changes);
      });
  }
}
