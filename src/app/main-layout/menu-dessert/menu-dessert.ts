import { Component } from '@angular/core';
import { Search } from '../services/search';
import { Cart } from '../services/cart';
import { Dish } from '../dataBase/dataBase';
import { CommonModule } from '@angular/common';
import { lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus   } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-menu-dessert',
  imports: [NgIcon, CommonModule],
   viewProviders: [provideIcons({ lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus })],
  templateUrl: './menu-dessert.html',
  styleUrl: './menu-dessert.css',
})
export class MenuDessert {


  dishData = new Dish();
    filteredDishes = this.dishData.MenuGelatinas;

  constructor(private search: Search,
    private cart: Cart
  ) {

    this.search.searchText$.subscribe(text => {

      this.filteredDishes =
        this.dishData.MenuGelatinas.filter(gelatina =>
          gelatina.name.toLowerCase().includes(text.toLowerCase())
        );

    });
    
   }



  AddToCart(dishId: number): void {
    console.log(`Agregado al carrito: Plato con ID ${dishId}`);
    this.cart.addToCart(this.dishData.MenuGelatinas.find(dish => dish.idGelatina === dishId));
  }

}
