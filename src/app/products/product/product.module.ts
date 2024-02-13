import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
