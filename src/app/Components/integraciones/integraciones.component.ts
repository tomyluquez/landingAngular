import { Component } from '@angular/core';

interface Apps {
  id: number;
  src: string;
}

@Component({
  selector: 'app-integraciones',
  templateUrl: './integraciones.component.html',
  styleUrls: ['./integraciones.component.css']
})
export class IntegracionesComponent {
  backInteg = '../assets/img/Images/intg_back.png';
  arrayApps: Apps[] = [];

  ngOnInit() {
    this.arrayApps = [
      
        {
          "id": 1,
          "src": "../assets/img/Images/intg1.png" 
      },
      {
          "id": 2,
          "src": "../assets/img/Images/intg2.png" 
      },
      {
          "id": 3,
          "src": "../assets/img/Images/intg3.png" 
      },
      {
          "id": 4,
          "src": "../assets/img/Images/intg4.png" 
      },
      {
          "id": 5,
          "src": "../assets/img/Images/intg5.png" 
      }
      
    ]
  }

}
