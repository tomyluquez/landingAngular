import { Component, signal } from '@angular/core';
import { Planes, Price } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  arrayPrices: Planes[] = [];
  arrayTypePrices: Price[] = [];

  subTitle = 'Planes Núcleo Check';
  title!: string;
  description =
    'Debajo podes elegir algun otro plan que se adapte a tus necesidades';
  checkedInput = signal(0);

  ngOnInit(): void {
    this.arrayPrices = [
      {
        id: 1,
        title: 'Plan Inicial',
        price: 17000,
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '2 usuarios en simultaneo',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturación Electrónica',
            includes: true,
          },
          {
            id: 3,
            icon: 'fa-solid fa-xmark text-red-500',
            text: 'Adición en dispositivos móviles de meseros',
            includes: false,
          },
          {
            id: 4,
            icon: 'fa-solid fa-xmark text-red-500',
            text: 'Intergación con apps de delivery',
            includes: false,
          },
          {
            id: 5,
            icon: 'fa-solid fa-xmark text-red-500',
            text: 'Pedidos de comensal en mesa',
            includes: false,
          },
        ],
        textButton: 'Suscribite ahora',
        elegido: false,
      },
      {
        id: 2,
        title: 'Plan Intermedio',
        price: 20500,
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '3 usuarios en simultaneo',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturación Electrónica',
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
            icon: 'fa-solid fa-xmark text-red-500',
            text: 'Intergación con apps de delivery',
            includes: false,
          },
          {
            id: 5,
            icon: 'fa-solid fa-xmark text-red-500',
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
        price: 24500,
        ul: [
          {
            id: 1,
            icon: 'fa-solid fa-check',
            text: '5 usuarios en simultaneo',
            includes: true,
          },
          {
            id: 2,
            icon: 'fa-solid fa-check',
            text: 'Facturación Electrónica',
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
            text: 'Intergación con apps de delivery',
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

    this.title = `Optimiza la gestion de tu negocio desde $${this.arrayPrices[0]?.price.toLocaleString()}. \n Incluye facturación Electrónica y pedidos ilimitados`;
  }

  changeCheckbox(value: number) {
    this.checkedInput.set(value);
  }

  calculatePlan(price: number) {
    if (this.checkedInput() === 0) return price.toLocaleString();

    const selectedType = this.arrayTypePrices.find(
      (type) => type.descuento === this.checkedInput(),
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
      (type) => type.descuento === this.checkedInput(),
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
