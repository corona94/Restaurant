import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {lucideMenu,lucideShoppingCart,lucideHouse,lucideSearch,lucidePhone  } from '@ng-icons/lucide';
import {AddToCar} from '../add-to-car/add-to-car';







@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon, AddToCar],
  viewProviders: [provideIcons({ lucideMenu, lucideShoppingCart, 
    lucideHouse, lucideSearch, lucidePhone })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private router = inject(Router);


  pruebaBoton = () =>
  {
   this.router.navigate(['/menu']);
  }
  

  menuDessert = () =>
  {
    this.router.navigate(['/menu-dessert']);
  }

 


}

