import { Component } from '@angular/core';
import { Planes, Price } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  subTitle = 'Planes Núcleo Check';
  title = 'Elige el plan ideal para tu negocio gastronómico';
  checkedInput = 0;

  arrayPrices: Planes[] = [];
  arrayTypePrices: Price[] = [];

  ngOnInit(): void {
    this.arrayPrices = [
      {
        id: 1,
        title: 'Plan Inicial',
        price: 15500,
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
        price: 19500,
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
        price: 23000,
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

    this.arrayTypePrices = [
      {
        title: 'Mensual',
        descuento: 0,
        meses: 1,
      },
      {
        title: 'Semestral',
        descuento: 20,
        meses: 6,
      },
      {
        title: 'Anual',
        descuento: 30,
        meses: 12,
      },
    ];
  }

  changeCheckbox(value: number) {
    this.checkedInput = value;
  }

  calculatePlan(price: number) {
    if (this.checkedInput === 0) return price.toLocaleString();
    const selectedType = this.arrayTypePrices.find(
      (type) => type.descuento === this.checkedInput,
    );

    if (selectedType && selectedType.descuento) {
      const abono = price - (price * selectedType?.descuento) / 100;
      const formattedAbono = abono.toLocaleString();
      return formattedAbono; // Calcula el descuento
    } else {
      return 0; // No hay descuento si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }

  calculatePrice(price: number) {
    const selectedType = this.arrayTypePrices.find(
      (type) => type.descuento === this.checkedInput,
    );

    if (selectedType && selectedType.descuento) {
      const abono = price - (price * selectedType?.descuento) / 100;
      const total = abono * selectedType.meses;
      const formattedTotal = total.toLocaleString();
      return `${formattedTotal} por ${selectedType.meses} meses`; // Calcula el descuento
    } else {
      return 0; // No hay descuento si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }
}
