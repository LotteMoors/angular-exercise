import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module.ts';
import { CoreModule } from './core/ core.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
