import { Component } from '@angular/core';

interface optionsHero {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  imgHero = '../../../assets/img/Images/header_4.png';
  imgHero2 = '../../../assets/img/Images/header_4_bubble.png';
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  subTitle = 'Sumate a la revolucion gastronomica';
  title = 'Nucleo Check el software gastronomico que esperabas';
  description =
    'Podrás usarlo en cualquier dispositivo con internet y tiene todo lo que necesitas.';
  arrayElements: optionsHero[] = [];
  month!: string;
  year!: string;
  linkCalendly!: string;

  ngOnInit() {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear().toString();
    this.linkCalendly = `https://calendly.com/nucleoit/demostracion-online?month=${this.year}-${this.month}`;
    this.arrayElements = [
      {
        id: 1,
        icon: 'fa-solid fa-circle-exclamation',
        text: 'Pedi una demo online de nuestro sistema',
      },
      // {
      //   id: 2,
      //   icon: 'fas fa-credit-card',
      //   text: 'Pago mensual o anual',
      // },
    ];
  }
}
