import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductModalComponent } from './product-modal/product-modal.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ProductsRoutingModule, ProductModalComponent, ReactiveFormsModule],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
