import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './../../reuse/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [ NavComponent ],
  exports: [ NavComponent ]
})
export class NavModule { }
