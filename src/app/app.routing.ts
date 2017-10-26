import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';

const appRoutes: Routes  = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        loadChildren: 'app/module/contact/contact.module#ContactModule'
    }
]

export const AppRouting = RouterModule.forRoot(appRoutes);