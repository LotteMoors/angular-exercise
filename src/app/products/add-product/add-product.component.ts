import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../core/ data.service';
import { Subscription, debounceTime } from 'rxjs';
import { ModalService } from '../../core/modal.service';

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
  @Output() closeModalAfterSubmit = new EventEmitter();
  closeModal: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  submitProduct() {
    this.dataService.setProduct(this.addProductForm.value);
    this.closeModalAfterSubmit.emit();
  }
}
