import { Component } from '@angular/core';
import { Elements } from '../about/about.component';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css']
})
export class About2Component {
  imgAbout = "../../../assets/img/Images/ipad.png"
  aboutBubles = '../assets/img/Images/about_s4_bubble2.png';
  title= 'Monitor de cocina'
  subTitle='Comandas virtuales'
  description = "Con el monitor de cocina, podras adicionar todo sin necesidad de imprimir."
  arrayElements: Elements[] = [];
  ngOnInit(){
    this.arrayElements = [
      {
        "id": 1,
        "icon": "fa-solid fa-print",
        "text": "Ahorro en papel + cuidado del planeta"
    },
    {
        "id": 2,
        "icon": "fa-solid fa-laptop",
        "text": "Dispositvo en cocina"
    },
    ]
  }
}
