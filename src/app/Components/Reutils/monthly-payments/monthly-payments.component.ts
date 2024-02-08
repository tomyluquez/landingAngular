import { Component, Input, effect } from '@angular/core';
import { Planes } from 'src/app/interfaces/interfaces';
import { PricesComponent } from '../../../Layouts/prices/prices.component';
import { environment } from 'src/app/Environments/environments';

@Component({
  selector: 'app-monthly-payments',
  templateUrl: './monthly-payments.component.html',
  styleUrls: ['./monthly-payments.component.css'],
})
export class MonthlyPaymentsComponent {
  @Input() plan!: Planes;
  @Input() isFreeTrailMode!: boolean;
  checkedInput: number = 0;
  linkFreeTrail = environment.LINL_FREE_TRAIL;

  constructor(private prices: PricesComponent) {
    effect(() => (this.checkedInput = this.prices.checkedInput()));
  }

  calculatePlan(price: number) {
    if (this.checkedInput === 0) return price.toLocaleString();

    const selectedType = this.prices.arrayDiscounts$.find(
      (type) => type.discount === this.checkedInput,
    );

    if (selectedType && selectedType.discount) {
      const abono = price - (price * selectedType?.discount) / 100;
      const formattedAbono = abono.toLocaleString();
      return formattedAbono; // Calcula el discount
    } else {
      return 0; // No hay discount si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }

  calculatePrice(price: number) {
    const selectedType = this.prices.arrayDiscounts$.find(
      (type) => type.discount === this.checkedInput,
    );

    if (selectedType && selectedType.discount) {
      const abono = price - (price * selectedType?.discount) / 100;
      const total = abono * selectedType.months;
      const formattedTotal = total.toLocaleString();
      return `${formattedTotal} por ${selectedType.months} meses`; // Calcula el discount
    } else {
      return 0; // No hay discount si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }
}
