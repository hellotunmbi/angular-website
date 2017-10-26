import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.interface';
// import { EqualValidator } from '../../equal-validator.directive';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
