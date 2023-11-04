import { Component, Input } from '@angular/core';

interface FormElements {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  subTitle = 'Nucleo Check';
  title = '¿Listo para descubrirnos?';
  description =
    'Accede a la demostracion online y te pondras en contacto con nuestro equipo de asesores quien te ayudaran en lo que necesites.  ';
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  imgLogo = '../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
  arrayForm: FormElements[] = [];

  ngOnInit(): void {
    this.arrayForm = [
      {
        id: 1,
        icon: 'fa-solid fa-phone',
        text: 'Bs. As.: 11 5263-0039',
      },
      {
        id: 2,
        icon: 'fa-solid fa-phone',
        text: 'Rosario: 341 208-0039',
      },
      {
        id: 3,
        icon: 'fa-solid fa-phone',
        text: 'Córdoba: 351 700-0039',
      },
      {
        id: 4,
        icon: 'fa-brands fa-whatsapp',
        text: '(549) 11-3277-7917',
      },
      {
        id: 5,
        icon: 'fa-solid fa-envelope',
        text: 'info@nucleoit.com.ar',
      },
    ];
  }
}
