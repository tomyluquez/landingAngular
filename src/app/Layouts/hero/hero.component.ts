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
  imgHero = '../../../assets/img/Images/devices.webp';
  imgHero2 = '../../../assets/img/Images/header_4_bubble.png';
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  subTitle = 'Súmate a la revolución gastronómica';
  title = 'Núcleo Check el software gastronómico que esperabas';
  description = `Puedes usarlo en cualquier dispositivo con internet y tiene todo lo que necesitas. Es la solución práctica que aplican los gastronómicos de habla hispana. 
  Recibe una demostración online con nuestros asesores sin compromiso.`;
  month!: string;
  year!: string;
  linkCalendly!: string;

  ngOnInit() {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear().toString();
    this.linkCalendly = `https://calendly.com/nucleoit/demostracion-online?month=${this.year}-${this.month}`;
  }
}
