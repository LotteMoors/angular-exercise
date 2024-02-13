import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [ CapitalizePipe, FilterPipe ],
    exports: [ CapitalizePipe, FilterPipe ]
})
export class SharedModule {}
