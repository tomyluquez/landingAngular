import { Component, Input } from '@angular/core';
import { FormElements } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  subTitle = 'Núcleo Check';
  title = '¿Listo para descubrirnos?';
  description = 'Contacta con nuestros asesores comerciales.';
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  imgLogo = '../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
  arrayForm: FormElements[] = [];
  element: any;

  ngOnInit(): void {
    this.arrayForm = [
      {
        id: 4,
        icon: 'fa-brands fa-whatsapp',
        text: '(549) 11-3277-7917',
        href: 'https://api.whatsapp.com/send?phone=5491132777917',
      },
      {
        id: 1,
        icon: 'fa-solid fa-phone',
        text: 'Buenos Aires: 11 5263-0039',
        href: null,
      },
      {
        id: 3,
        icon: 'fa-solid fa-phone',
        text: 'Córdoba: 351 700-0039',
        href: null,
      },
      {
        id: 6,
        icon: 'fa-solid fa-phone',
        text: 'Mendoza 261 352-0039',
        href: null,
      },
      {
        id: 2,
        icon: 'fa-solid fa-phone',
        text: 'Rosario: 341 208-0039',
        href: null,
      },
      {
        id: 7,
        icon: 'fa-solid fa-phone',
        text: 'Tucuman 381 596-0039',
        href: null,
      },
      {
        id: 8,
        icon: 'fa-solid fa-phone',
        text: 'Mar del plata 223 630-0039',
        href: null,
      },
      {
        id: 5,
        icon: 'fa-solid fa-envelope',
        text: 'info@nucleoit.com.ar',
        href: null,
      },
      {
        id: 9,
        icon: 'fa-solid fa-location-dot',
        text: 'Lavalle 1783 7°B, CABA',
        href: null,
      },
    ];
  }
}
