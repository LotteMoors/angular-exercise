import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from '../../core/ data.service';
import { IProduct } from '../../shared/interfaces';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProductForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    brand: ['', Validators.required],
    category: ['', Validators.required],
    price: [0, Validators.required],
  });

  @Input() products: any;
  @Output() closeModalAfterSubmit = new EventEmitter();
  closeModal: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  submitProduct() {
    this.dataService.setProduct(this.addProductForm.value).subscribe((data) => {
      this.closeModalAfterSubmit.emit();
      this.products.unshift({ ...this.addProductForm.value, id: data.id });
    });
  }
}
