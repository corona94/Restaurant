import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {lucideShoppingCart, lucideMinus, lucideX  } from '@ng-icons/lucide';
import { Cart } from '../services/cart';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-to-car',
  imports: [NgIcon, CommonModule],
  viewProviders: [provideIcons({ lucideShoppingCart, lucideMinus, lucideX })],
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


sendWhatsApp(): void {

  const phone = '523317988980'; // Tu número

  let message = 'Hola, quisiera realizar el siguiente pedido:%0A%0A';

  this.itemsInCart.forEach(item => {

    const price = Number(item.price.replace('$', ''));

    const subtotal = price * item.quantity;

    message += `🍽️ ${item.name}%0A`;
    message += `Cantidad: ${item.quantity}%0A`;
    message += `Precio: $${price.toFixed(2)}%0A`;
    message += `Subtotal: $${subtotal.toFixed(2)}%0A%0A`;

  });

  message += `💰 TOTAL: $${this.total.toFixed(2)}`;

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    '_blank'
  );
}

 
}


