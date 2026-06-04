import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {lucideMenu,lucideShoppingCart,lucideHouse,lucideSearch,lucidePhone  } from '@ng-icons/lucide';
import {AddToCar} from '../add-to-car/add-to-car';
import { FormsModule } from '@angular/forms';
import { Search } from '../services/search';



interface MenuItem {

  idDish: number;
  name: string;
  description: string;
  price: string;
  image: string;
  etiquetas: string[];

}



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon, AddToCar, FormsModule],
  viewProviders: [provideIcons({ lucideMenu, lucideShoppingCart, 
    lucideHouse, lucideSearch, lucidePhone })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


  constructor(private search: Search) { }

  private router = inject(Router);


  pruebaBoton = () =>
  {
   this.router.navigate(['/menu']);
  }
  

  menuDessert = () =>
  {
    this.router.navigate(['/menu-dessert']);
  }


  serachDish: string = '';


funcionSearch() {
  console.log(this.serachDish);
  this.search.setSearch(this.serachDish);
}

 


}

