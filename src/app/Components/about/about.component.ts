import { Component } from '@angular/core';

export interface Elements {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imgAbout = "../../../assets/img/Images/2mobiles.png"
  aboutBubles = '../../../assets/img/Images/about_s4_bubble.png';
  aboutWave = '../../../assets/img/Images/about_s4_wave.png';
  aboutLines = '../assets/img/Images/about_s4_lines.png';
  title= 'Autogestion de pedidos de salon'
  subTitle='Automatizacion'
  description = "Los clientes podrán tomarse su propio pedido sin necesidad de esperar a un camarero. También cuenta con la funcionalidad de llamar a un mozo y de pagar la cuenta virtualmente."
  arrayElements: Elements[] = [];
  ngOnInit(){
    this.arrayElements = [
      {
        "id": 1,
        "icon": "fas fa-tag",
        "text": "Solo escaneando un QR, sin necesidad de bajar una App"
    },
    {
        "id": 2,
        "icon": "fas fa-sync",
        "text": "Sincronización instantánea con el software"
    },
    {
        "id": 3,
        "icon": "fas fa-text-width",
        "text": "Circuito completo 100% integrado"
    }
    ]
  }
}
