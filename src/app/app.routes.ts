import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { MenuDish } from './main-layout/menu-dish/menu-dish';
import { MenuDessert } from './main-layout/menu-dessert/menu-dessert';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'

            },
            {
                path: 'menu',
                component: MenuDish
            }
            ,
            {
                path: 'menu-dessert',
                component: MenuDessert
            }
        ]
    }
];
