import { Component } from '@angular/core';

interface Clients {
  id: number;
  img: string;
  alt: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  arrayClients: Clients[] = [
    {
      "id": 1,
      "img": "../../../assets/img/Logos/1.png",
      "alt": "Logo 1"
  },
  {
      "id": 2,
      "img": "../../../assets/img/Logos/2.png",
      "alt": "Logo 2"
  },
  {
      "id": 3,
      "img": "../../../assets/img/Logos/3.png",
      "alt": "Logo 3"
  },
  {
      "id": 4,
      "img": "../../../assets/img/Logos/4.png",
      "alt": "Logo 4"
  },
  {
      "id": 5,
      "img": "../../../assets/img/Logos/5.png",
      "alt": "Logo 5"
  },
  {
      "id": 6,
      "img": "../../../assets/img/Logos/6.png",
      "alt": "Logo 6"
  }
  ]

  constructor() {
    const clonedClients = [...this.arrayClients];
    this.arrayClients = this.arrayClients.concat(clonedClients);
  }


}
