import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus   } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Cart } from '../services/cart';
import {Dish} from '../dataBase/dataBase';
import { Search } from '../services/search';


@Component({
  selector: 'app-menu-dish',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [provideIcons({ lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus })],
  templateUrl: './menu-dish.html',
  styleUrl: './menu-dish.css',
})


export class MenuDish {

  dishData = new Dish();
  filteredDishes = this.dishData.MenuDish;

  constructor(private cart: Cart,
              private search: Search
  ) { 

    this.search.searchText$.subscribe(text => {

      this.filteredDishes =
        this.dishData.MenuDish.filter(dish =>
          dish.name.toLowerCase().includes(text.toLowerCase())
        );

    });


  }


  AddToCart(dishId: number): void {
    console.log(`Agregado al carrito: Plato con ID ${dishId}`);
    this.cart.addToCart(this.dishData.MenuDish.find(dish => dish.idDish === dishId));
  }


  




}
