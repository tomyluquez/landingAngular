import { Component, Input, effect } from '@angular/core';
import { Planes } from 'src/app/interfaces/interfaces';
import { PricesComponent } from '../../../Layouts/prices/prices.component';

@Component({
  selector: 'app-monthly-payments',
  templateUrl: './monthly-payments.component.html',
  styleUrls: ['./monthly-payments.component.css'],
})
export class MonthlyPaymentsComponent {
  @Input() plan!: Planes;
  checkedInput: number = 0;

  constructor(private prices: PricesComponent) {
    effect(() => (this.checkedInput = this.prices.checkedInput()));
  }

  calculatePlan(price: number) {
    if (this.checkedInput === 0) return price.toLocaleString();

    const selectedType = this.prices.arrayTypePrices.find(
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
    const selectedType = this.prices.arrayTypePrices.find(
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
