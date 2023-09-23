import { Component } from '@angular/core';

interface optionsHero {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  imgHero = "../../../assets/img/Nucleo-img/agendaDemo.png"
  imgHero2 = '../../../assets/img/Images/header_4_bubble.png';
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  subTitle = 'Sumate a la revolucion gastronomica'
  title = "Nucleo Check el software gastronomico que esperabas"
  description= 'Podrás usarlo en cualquier dispositivo con internet y tiene todo lo que necesitas.'
  arrayElements: optionsHero[] = []

  ngOnInit() {
    this.arrayElements = [
      {
        "id": 1,
        "icon": "fas fa-sync",
        "text": "¡Gratis! Probalo por 14 días"
    },
    {
        "id": 2,
        "icon": "fas fa-credit-card",
        "text": "Pago mensual o anual"
    }
    ]
  }

}
