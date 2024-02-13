import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../core/ data.service';
import { IProduct } from '../../shared/interfaces';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css',
})
export class ProductModalComponent {
  productForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    brand: ['', Validators.required],
    category: ['', Validators.required],
    price: [0, Validators.required],
  });

  updatedProduct: IProduct;

  @Input() product: IProduct;
  @Input() products: any;
  @Input() isEdit: boolean;
  @Output() closeModalAfterSubmit = new EventEmitter();
  @Output() updateProduct = new EventEmitter<IProduct>();
  closeModal: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    if (this.isEdit) {
      this.productForm = this.formBuilder.group({
        title: [this.product.title, Validators.required],
        description: [this.product.description, Validators.required],
        brand: [this.product.brand, Validators.required],
        category: [this.product.category, Validators.required],
        price: [this.product.price, Validators.required],
      });
    }
  }

  submitProduct() {
    if (!this.isEdit) {
      this.dataService.setProduct(this.productForm.value).subscribe((data) => {
        this.closeModalAfterSubmit.emit();
        this.products.unshift({ ...this.productForm.value, id: data.id });
      });
    } else {
      this.updatedProduct = {
        ...this.product,
        ...this.productForm.value,
        price: this.productForm.value.price as number,
      };
      this.dataService.updateProduct(this.updatedProduct).subscribe(() => {
        this.closeModalAfterSubmit.emit();
        this.updateProduct.emit(this.updatedProduct);
      });
    }
  }
}
