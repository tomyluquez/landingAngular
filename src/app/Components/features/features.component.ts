import { Component } from '@angular/core';

interface Features {
  id: number;
  text: string;
  text2?: string;
  icon: string;
  bgColor?: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  arrayFeatures: Features[] = [];
  imgCircle = '../../../assets/img/Images/feat_circle.png';

  ngOnInit() {
    this.arrayFeatures = [
      {
        id: 1,
        text: 'Facturación electrónica',
        text2:
          'Facturacion electronica de afip para facturar sin impresora fiscal',
        icon: 'fa-solid fa-file-invoice-dollar',
      },
      {
        id: 2,
        text: 'Tablet para meseros',
        text2:
          'Posibilidad de que los mozos tomen los pedidos en las mesas con un dispositivo',
        icon: 'fa-solid fa-tablet-screen-button',
      },
      {
        id: 3,
        text: 'Integración con todas las aplicaciones de delivery online',
        text2:
          'Estamos integrados con las mejores apps de pedidos para que uses todo en un solo sistema',
        icon: 'fa-solid fa-truck-ramp-box',
      },
      {
        id: 4,
        text: 'Centralizador para sucursales',
        text2: 'para controlar sucursales o franquicias',
        icon: 'fa-solid fa-laptop-code',
      },
      {
        id: 5,
        text: 'Auditoría e informes',
        text2: 'para que puedas ver el estado de tu negocio',
        icon: 'fa-solid fa-chart-line',
      },
    ];
  }
}
