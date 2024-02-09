import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module.ts';
import { CoreModule } from './core/ core.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ProductModule } from './products/product/product.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    ProductsModule,
    ProductModule,
    OrdersModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
