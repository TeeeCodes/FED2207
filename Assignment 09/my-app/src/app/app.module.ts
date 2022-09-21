import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Rectangle2Component } from './rectangle2/rectangle2.component';
import { Rectangle3Component } from './rectangle3/rectangle3.component';
import { Rectangle1Component } from './rectangle1/rectangle1.component';

@NgModule({
  declarations: [
    AppComponent,
    Rectangle2Component,
    Rectangle3Component,
    Rectangle1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
