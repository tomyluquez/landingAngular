import { Component, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Discount, Planes } from 'src/app/interfaces/interfaces';
import { DiscountsService } from 'src/app/services/discounts.service';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  arrayPrices$ = new BehaviorSubject<Planes[]>([]); // Inicializamos con un array vacío
  arrayDiscounts$!: Discount[];

  subTitle = 'Planes Núcleo Check';
  title!: string;
  description =
    'Debajo podes elegir algun otro plan que se adapte a tus necesidades.';
  checkedInput = signal(0);

  constructor(
    private _plansServices: PlansService,
    private _discountsService: DiscountsService,
  ) {}

  ngOnInit(): void {
    this._plansServices.getPlans().subscribe(({ plans }) => {
      this.arrayPrices$.next(plans);
      this.title = `Optimiza la gestion de tu negocio desde $${this.arrayPrices$.value[0]?.price.toLocaleString()}. \n Incluye facturación Electrónica y pedidos ilimitados`;
    });

    this._discountsService.getDiscounts().subscribe(({ discounts }) => {
      this.arrayDiscounts$ = discounts;
    });
  }

  changeCheckbox(value: number) {
    this.checkedInput.set(value);
  }
}

// this.arrayPrices = [
//   {
//     id: 1,
//     type: 'Plan Inicial',
//     price: 17000,
//     items: [
//       {
//         id: 1,
//         text: '2 usuarios en simultaneo',
//         includes: true,
//       },
//       {
//         id: 2,
//         text: 'Facturación Electrónica',
//         includes: true,
//       },
//       {
//         id: 3,
//         text: 'Adición en dispositivos móviles de meseros',
//         includes: false,
//       },
//       {
//         id: 4,
//         text: 'Integración con apps de delivery',
//         includes: false,
//       },
//       {
//         id: 5,
//         text: 'Pedidos de comensal en mesa',
//         includes: false,
//       },
//     ],
//     textButton: 'Suscribite ahora',
//     better: false,
//   },
//   {
//     id: 2,
//     type: 'Plan Intermedio',
//     price: 20500,
//     items: [
//       {
//         id: 1,
//         text: '3 usuarios en simultaneo',
//         includes: true,
//       },
//       {
//         id: 2,
//         text: 'Facturación Electrónica',
//         includes: true,
//       },
//       {
//         id: 3,
//         text: 'Adición en dispositivos móviles de meseros',
//         includes: true,
//       },
//       {
//         id: 4,
//         text: 'Integración con apps de delivery',
//         includes: false,
//       },
//       {
//         id: 5,
//         icon: 'fa-solid fa-xmark text-red-500',
//         text: 'Pedidos de comensal en mesa',
//         includes: false,
//       },
//     ],
//     textButton: 'Suscribite ahora',
//     better: true,
//   },
//   {
//     id: 3,
//     type: 'Plan Superior',
//     price: 24500,
//     items: [
//       {
//         id: 1,
//         icon: 'fa-solid fa-check',
//         text: '5 usuarios en simultaneo',
//         includes: true,
//       },
//       {
//         id: 2,
//         text: 'Facturación Electrónica',
//         includes: true,
//       },
//       {
//         id: 3,
//         text: 'Adición en dispositivos móviles de meseros',
//         includes: true,
//       },
//       {
//         id: 4,
//         text: 'Integración con apps de delivery',
//         includes: true,
//       },
//       {
//         id: 5,
//         text: 'Pedidos de comensal en mesa',
//         includes: true,
//       },
//     ],
//     textButton: 'Suscribite ahora',
//     better: false,
//   },
// ];

// this.arrayTypePrices = [
//   {
//     title: 'Mensual',
//     descuento: 0,
//     meses: 1,
//   },
//   {
//     title: 'Semestral',
//     descuento: 10,
//     meses: 6,
//   },
//   {
//     title: 'Anual',
//     descuento: 15,
//     meses: 12,
//   },
// ];
