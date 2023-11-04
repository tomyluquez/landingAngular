import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

interface elements {
  id: number;
  text: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  arrayElements: elements[] = [];
  imgLogo = '../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
  textButton = 'Agenda una demo';
  isOpen = false;
  month!: string;
  year!: string;
  linkCalendly!: string;

  scrollPosition: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear().toString();
    this.linkCalendly = `https://calendly.com/nucleoit/demostracion-online?month=${this.year}-${this.month}`;
    this.arrayElements = [
      {
        id: 2,
        text: 'Caracteristicas',
        href: '#features',
      },
      {
        id: 4,
        text: 'Integraciones',
        href: '#integraciones',
      },
      {
        id: 6,
        text: 'Precios',
        href: '#precios',
      },
      {
        id: 7,
        text: 'Faq',
        href: '#faq',
      },
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
