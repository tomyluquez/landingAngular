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
    return this.prices.calculatePlan(price);
  }

  calculatePrice(price: number) {
    return this.prices.calculatePrice(price);
  }
}
