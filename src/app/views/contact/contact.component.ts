import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private contactService: ContactService, meta: Meta, title: Title) { 

    title.setTitle('Welcome to the simple Angular website with complex features');

    meta.addTags([
      { name: 'author', content: 'Tunmbi' },
      { name: 'description', content: 'Description of the contact page goes in here' },
      { name: 'keywords', content: 'angular, lazy loading, website' }
    ]);
  }


  saveForm() {
    this.contactService.saveContact(this.contact)
      this.result = true;
      console.log(this.result);
  }


  ngOnInit() {
    console.log(this.result);
  }

}
