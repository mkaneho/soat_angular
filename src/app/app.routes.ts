import { Routes } from '@angular/router';
import { ToysComponent } from './containers/toys/toys.container';
import { BasketComponent } from './containers/basket/basket.container';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full', // regarde la doc pour le fonctionnement de pathMatch
        redirectTo: '/toys'
    },
    {
        path: 'toys',
        component: ToysComponent
    },
    {
        path: 'basket',
        component: BasketComponent
    }
]