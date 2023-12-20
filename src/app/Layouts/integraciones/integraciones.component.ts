import { Component } from '@angular/core';

interface Apps {
  id: number;
  src: string;
}

@Component({
  selector: 'app-integraciones',
  templateUrl: './integraciones.component.html',
  styleUrls: ['./integraciones.component.css'],
})
export class IntegracionesComponent {
  backInteg = '../assets/img/Images/intg_back.png';
  arrayApps: Apps[] = [];
  title = 'Integrado con las apliaciones mas usadas';
  subTitle = 'Todos los pedidos en un solo lugar';
  description =
    'Se integra a la perfección con aplicaciones de delivery y métodos de pago';

  ngOnInit() {
    this.arrayApps = [
      {
        id: 6,
        src: '../assets/img/Images/domo.png',
      },
      {
        id: 3,
        src: '../assets/img/Images/intg3.png',
      },
      {
        id: 1,
        src: '../assets/img/Images/intg1.png',
      },
      {
        id: 2,
        src: '../assets/img/Images/intg2.png',
      },
      {
        id: 4,
        src: '../assets/img/Images/intg4.png',
      },
      {
        id: 5,
        src: '../assets/img/Images/intg5.png',
      },
    ];
  }
}
