import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus   } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Cart } from '../services/cart';


@Component({
  selector: 'app-menu-dish',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [provideIcons({ lucideCirclePlus, lucideBadgeInfo, lucideCircleMinus })],
  templateUrl: './menu-dish.html',
  styleUrl: './menu-dish.css',
})


export class MenuDish {

  constructor(private cart: Cart) { }

  AddToCart(dishId: number): void {
    console.log(`Agregado al carrito: Plato con ID ${dishId}`);
    this.cart.addToCart(this.MenuDish.find(dish => dish.idDish === dishId));
  }


  MenuDish = [
    {
      idDish: 1,
      name: 'Ensalada fresca',
      description: 'Una mezcla de verduras frescas con aderezo ligero.',
      price: '$8.99',
      image: 'imagenes/ensalada.jpg',
      etiquetas: ['Vegetariano', 'Saludable']
    },
    {
      idDish: 2,
      name: 'Papas crujientes',
      description: 'Papas fritas crujientes con un toque de sal y especias.',
      price: '$4.99',
      image: 'imagenes/papas.avif',
      etiquetas: ['Aperitivo', 'Vegetariano']
    },
    {
        idDish: 3,
      name: 'Pastel de chocolate',
      description: 'Un delicioso pastel de chocolate con cobertura de ganache.',
      price: '$6.99',
      image: 'imagenes/pastel.webp',
      etiquetas: ['Postre', 'Vegetariano']
    },
    {
      idDish: 4,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
     {
        idDish: 5,  
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
     {
      idDish: 6,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
     {
      idDish: 7,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
    {
      idDish: 8,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
    {
      idDish: 9,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
     {
      idDish: 10,
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
  ];




}
