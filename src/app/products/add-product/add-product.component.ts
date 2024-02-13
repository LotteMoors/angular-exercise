import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProduct = this.formBuilder.group({
    Title: '',
    Description: '',
    Brand: '',
    Category: '',
    Price: 0,
  });

  constructor(private formBuilder: FormBuilder) {}
}
