import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('About Page');

    meta.addTags([
      { name: 'author', content: 'Tunmbi' },
      { name: 'description', content: 'This is a description of the about page' },
      { name: 'keywords', content: 'angular, lazy loading, website' }
    ]);
   }

  ngOnInit() {
  }

}
