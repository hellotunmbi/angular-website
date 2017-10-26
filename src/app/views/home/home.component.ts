import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Welcome to the simple Angular website with complex features');

    meta.addTags([
      { name: 'author', content: 'Tunmbi' },
      { name: 'description', content: 'A basic website build with Angular 4 and has features like Lazy loading, form validation etc' },
      { name: 'keywords', content: 'angular, lazy loading, website' }
    ]);
   }

  ngOnInit() {
  }

}
