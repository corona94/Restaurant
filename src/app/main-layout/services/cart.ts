import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  private items: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }

  addToCart(item: any): void {

  const existingItem = this.items.find(
    product => product.idDish === item.idDish
  );

  if (existingItem) {

    existingItem.quantity++;

  } else {

    this.items.push({
      ...item,
      quantity: 1
    });

  }

  this.saveCart();
}

  getItems(): any[] {
    return this.items;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.saveCart();
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem('cart');
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

}
