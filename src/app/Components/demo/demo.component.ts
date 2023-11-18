import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  subTitle = 'Descubre Núcleo Check';
  title =
    'Ingresa a la mejor solución para los negocios gastronómicos de habla hispana';
  description = 'Solicita hoy una demo haciendo clic en el botón debajo';
  month!: string;
  year!: string;
  linkCalendly!: string;

  constructor() {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear().toString();
    this.linkCalendly = `https://calendly.com/nucleoit/demostracion-online?month=${this.year}-${this.month}`;
  }
}
