import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
  subTitle= "Nucleo Check"
  title = "¿Listo para descubrirnos?"
  description = "Accede a la prueba gratuita y ponete en contacto con nuestro equipo de asesores quien te ayudaran en lo que necesites.  "
  imgHero3 = '../assets/img/Images/header_4_wave.png';
  imgLogo = "../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png";


  ngOnInit(): void {
    
  }
}
