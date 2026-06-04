import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {lucideShoppingCart, lucideMinus  } from '@ng-icons/lucide';
import { Cart } from '../services/cart';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-to-car',
  imports: [NgIcon, CommonModule],
  viewProviders: [provideIcons({ lucideShoppingCart, lucideMinus })],
  templateUrl: './add-to-car.html',
  styleUrl: './add-to-car.css',
})
export class AddToCar {


  constructor(private cart: Cart) { }


  get itemsInCart(): any[] {
    return this.cart.getItems();
  }

  get totalItems(): number {
  return this.itemsInCart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

  showCart = false;

toggleCart(): void {
  this.showCart = !this.showCart;
}

get total(): number {
  return this.itemsInCart.reduce((sum, item) => {
    const price = Number(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);
}

 clearCart(): void {
    this.cart.clearCart();
  }


  removeItem(index: number): void {

  const item = this.itemsInCart[index];

  if (item.quantity > 1) {

    item.quantity--;

  } else {

    this.itemsInCart.splice(index, 1);

  }

 

}

 
}


