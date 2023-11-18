import { Component } from '@angular/core';

interface Planes {
  id: number;
  title: string;
  price: string;
  yearPrice: string;
  ul: Array<any>;
  textButton: string;
  elegido: boolean;
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  subTitle = 'Planes Núcleo Check';
  title = 'Elige el plan ideal para tu negocio gastronómico';
  checkedInput = false;

  arrayPrices: Planes[] = [];

  ngOnInit(): void {
    this.arrayPrices = [
      {
        id: 1,
        title: 'Plan Inicial',
        price: '6.000',
        yearPrice: '60.000',
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '1 usuario',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturacion electronica',
            includes: true,
          },
          {
            id: 3,
            icon: 'fa-solid fa-xmark',
            text: 'Adición en dispositivos móviles de meseros',
            includes: false,
          },
          {
            id: 4,
            icon: 'fa-solid fa-xmark',
            text: 'Intergacion con apps de delivery',
            includes: false,
          },
          {
            id: 5,
            icon: 'fa-solid fa-xmark',
            text: 'Pedidos de comensal en mesa',
            includes: false,
          },
        ],
        textButton: 'Suscribite ahora',
        elegido: false,
      },
      {
        id: 2,
        title: 'Plan Premium',
        price: '8.000',
        yearPrice: '84.000',
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '2 usuarios',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturacion electronica',
            includes: true,
          },
          {
            id: 3,
            icon: 'fa-solid fa-check',
            text: 'Adición en dispositivos móviles de meseros',
            includes: true,
          },
          {
            id: 4,
            icon: 'fa-solid fa-check',
            text: 'Intergacion con apps de delivery',
            includes: true,
          },
          {
            id: 5,
            icon: 'fa-solid fa-xmark',
            text: 'Pedidos de comensal en mesa',
            includes: false,
          },
        ],
        textButton: 'Suscribite ahora',
        elegido: true,
      },
      {
        id: 3,
        title: 'Plan Superior',
        price: '10.000',
        yearPrice: '108.000',
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '3 usuarios',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturacion electronica',
            includes: true,
          },
          {
            id: 3,
            icon: 'fa-solid fa-check',
            text: 'Adición en dispositivos móviles de meseros',
            includes: true,
          },
          {
            id: 4,
            icon: 'fa-solid fa-check',
            text: 'Intergacion con apps de delivery',
            includes: true,
          },
          {
            id: 5,
            icon: 'fa-solid fa-check',
            text: 'Pedidos de comensal en mesa',
            includes: true,
          },
        ],
        textButton: 'Suscribite ahora',
        elegido: false,
      },
    ];
  }

  changeCheckbox() {
    this.checkedInput = !this.checkedInput;
  }
}
