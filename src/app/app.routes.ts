import { Routes } from '@angular/router';
import { AppLogoComponent } from '../app-logo/app-logo.component';
import { HomeLogoComponent } from '../home-logo/home-logo.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about/about.component';
import { DellComponent } from '../Brand/dell/dell.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'App_Logo',
        pathMatch:'full'  
    },
    {
        path:"App_Logo",
        component:AppLogoComponent
    },
    {
        path:"Home",
        component:HomeLogoComponent
    },
    {
        path:"HomePage",
        component:HomeComponent
    }
    ,
    {
        path:"About",
        component:AboutComponent
    },
    {
        path:"dell",
        component:DellComponent
    },
     {
        path:"contact",
        component:ContactComponent
    }
];
