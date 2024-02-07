import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [ProductRoutingModule],
  declarations: [ProductComponent],
})
export class ProductModule {}
