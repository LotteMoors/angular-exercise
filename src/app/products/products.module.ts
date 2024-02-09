import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ProductsRoutingModule],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
