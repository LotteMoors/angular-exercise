import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent }  from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule, ReactiveFormsModule ],
  declarations: [ CustomersComponent, CustomersListComponent ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
