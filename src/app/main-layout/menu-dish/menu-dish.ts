import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lucideCirclePlus, lucideBadgeInfo   } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-menu-dish',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [provideIcons({ lucideCirclePlus, lucideBadgeInfo })],
  templateUrl: './menu-dish.html',
  styleUrl: './menu-dish.css',
})


export class MenuDish {


  MenuDish = [
    {
      name: 'Ensalada fresca',
      description: 'Una mezcla de verduras frescas con aderezo ligero.',
      price: '$8.99',
      image: 'imagenes/ensalada.jpg',
      etiquetas: ['Vegetariano', 'Saludable']
    },
    {
      name: 'Papas crujientes',
      description: 'Papas fritas crujientes con un toque de sal y especias.',
      price: '$4.99',
      image: 'imagenes/papas.avif',
      etiquetas: ['Aperitivo', 'Vegetariano']
    },
    {
      name: 'Pastel de chocolate',
      description: 'Un delicioso pastel de chocolate con cobertura de ganache.',
      price: '$6.99',
      image: 'imagenes/pastel.webp',
      etiquetas: ['Postre', 'Vegetariano']
    },
    {
      name: 'Bowl saludable',
      description: 'Un bowl lleno de ingredientes frescos y nutritivos.',
      price: '$9.99',
      image: 'imagenes/sano.jpg',
      etiquetas: ['Saludable', 'Vegetariano']
    },
  ];




}
