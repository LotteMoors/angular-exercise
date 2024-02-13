import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@NgModule({
  imports: [SharedModule, ProductRoutingModule, ProductModalComponent],
})
export class ProductModule {
}
