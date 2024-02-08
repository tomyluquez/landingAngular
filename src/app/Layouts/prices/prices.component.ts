import { Component, signal, Input } from '@angular/core';
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
  @Input() isFreeTrailMode!: boolean;
  arrayPrices$ = new BehaviorSubject<Planes[]>([]);
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
