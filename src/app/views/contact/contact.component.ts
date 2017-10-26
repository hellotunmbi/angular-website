import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.interface';

import { ContactService } from './../../services/contact.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit {

  contact: any = {};

  result = false;

  constructor(private contactService: ContactService) { }


  saveForm() {
    this.contactService.saveContact(this.contact)
      this.result = true;
      console.log(this.result);
  }

  ngOnInit() {
    console.log(this.result);
  }

}
