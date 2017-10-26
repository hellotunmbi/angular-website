import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor() { }

  saveContact(contact: Object) {
    if (localStorage.setItem('contactinfo', JSON.stringify(contact))) {
      return true;
    }
    return false;
  }

}
