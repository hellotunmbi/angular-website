import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { ContactService } from './services/contact.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NavComponent } from './reuse/nav/nav.component';

import { EqualValidator } from './module/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    EqualValidator
  ],
  imports: [
    AppRouting,
    BrowserModule.withServerTransition({ appId: 'NgWebsite' })
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule { }
