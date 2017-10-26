import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './../../views/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ],
  declarations: [ ContactComponent ]
})
export class ContactModule { }
