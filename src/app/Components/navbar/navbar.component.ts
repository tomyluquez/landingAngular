import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

interface elements {
  id: number;
  text: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  arrayElements: elements[] = [];
  imgLogo = "../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png";
  textButton = 'Probalo Gratis';
  isOpen = false;

  scrollPosition: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.arrayElements = [
      {
        "id": 1,
        "text": "Clientes",
        "href": "#clientes"
      },
      {
        "id": 2,
        "text": "Caracteristicas",
        "href": "#features"
      },
      {
        "id": 3,
        "text": "Beneficios",
        "href": "#beneficios"
      },
      {
        "id": 4,
        "text": "Integraciones",
        "href": "#integraciones"
      },
      {
        "id": 5,
        "text": "Testimonios",
        "href": "#testimonios"
      },
      {
        "id": 6,
        "text": "Precios",
        "href": "#precios"
      },
      {
        "id": 7,
        "text": "Faq",
        "href": "#faq"
      },
      {
        "id": 8,
        "text": "Contacto",
        "href": "#redes"
      }
    ];

    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;
      this.cdr.detectChanges(); // Detect changes to update the view
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
