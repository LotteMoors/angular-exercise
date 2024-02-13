import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SorterService } from './sorter.service';
import { DataService } from './ data.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ DataService, SorterService ]
})
export class CoreModule { }
