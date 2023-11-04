import { Component } from '@angular/core';

export interface Elements {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  imgAbout = '../../../assets/img/Images/2mobiles.png';
  aboutBubles = '../../../assets/img/Images/about_s4_bubble.png';
  aboutWave = '../../../assets/img/Images/about_s4_wave.png';
  aboutLines = '../assets/img/Images/about_s4_lines.png';
  title = 'Toma de pedidos para mozos';
  subTitle = 'Diseño móvil para mozos';
  description =
    'Los camareros podrán adicionar los pedidos al sistema desde las mesas sin necesidad de ir a una PC.';
  arrayElements: Elements[] = [];
  ngOnInit() {
    this.arrayElements = [
      {
        id: 1,
        icon: 'fas fa-tag',
        text: 'Desde cualquier dispositivo móvil',
      },
      {
        id: 2,
        icon: 'fas fa-sync',
        text: 'Sincronización instantánea con el software',
      },
      {
        id: 3,
        icon: 'fas fa-text-width',
        text: 'Circuito completo sin moverse del lugar',
      },
    ];
  }
}
