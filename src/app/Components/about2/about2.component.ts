import { Component } from '@angular/core';
import { Elements } from '../about/about.component';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css'],
})
export class About2Component {
  imgAbout = '../../../assets/img/Images/ipad.png';
  aboutBubles = '../assets/img/Images/about_s4_bubble2.png';
  title = 'Monitor de cocina';
  subTitle = 'Comandas virtuales';
  description =
    'Ingresa y organiza los pedidos. Con el monitor de cocina podrás ingresar todos los pedidos sin necesidad de imprimir. Teniendo un dispositivo en la cocina puedes encargarte de todo sin interrumpir las tareas';
  arrayElements: Elements[] = [];
  ngOnInit() {
    this.arrayElements = [
      {
        id: 1,
        icon: 'fa-solid fa-print',
        text: 'Ahorra en papel y cuida del planeta',
      },
      {
        id: 2,
        icon: 'fa-solid fa-laptop',
        text: 'Dispositivo móvil en la cocina',
      },
    ];
  }
}
