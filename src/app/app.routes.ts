import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';

export const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path:'new-customer',
        component:NewCustomerComponent
    },
    { path: '', redirectTo: '/home',
         pathMatch: 'full' 
    }
];
