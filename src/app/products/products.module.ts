import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ProductsRoutingModule, AddProductComponent, ReactiveFormsModule],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
