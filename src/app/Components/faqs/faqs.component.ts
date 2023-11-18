import { Component } from '@angular/core';

interface Faqs {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  arrayFaqs: Faqs[] = [];
  arrayFaqs2: Faqs[] = [];
  subTitle = 'Preguntas Frecuentes';
  title = '¿Tienes más preguntas sobre Núcleo Check?';
  description =
    'Consulta en esta sección y encuentra la respuesta a tus preguntas';

  indexSelect = 0;

  ngOnInit(): void {
    this.arrayFaqs = [
      {
        id: 1,
        question: '¿Es seguro trabajar con un software en la nube?',
        answer:
          'Sin dudas. Trabajar en la nube es más seguro que desde un computador o PC fijo. Para dar gran excelencia en nuestro servicio, alojamos nuestro sistema en los servidores de Microsoft (Azure) en los Estados Unidos. Cuentan con los mejores protocolos de seguridad garantizados por estar online 99.99% del tiempo.',
      },
      {
        id: 2,
        question: '¿Qué pasa si me quedo sin internet en el negocio?',
        answer:
          'Puedes seguir operando, ya que todo está alojado en la nube. Puedes acceder desde cualquier dispositivo móvil (celular, tablet o laptop) que cuente con acceso a internet',
      },
      {
        id: 3,
        question: '¿Cuento con Soporte técnico en caso de necesitarlo?',
        answer:
          'Si. Todos los usuarios del sistema de Núcleo Check cuentan con la atención los 365 días del año. Nuestros clientes cuentan con capacitaciones ilimitadas que brindamos para que puedan aprovechar al máximo el servicio.',
      },
      {
        id: 4,
        question: '¿El sistema se puede usar con pantallas táctiles?',
        answer:
          'Si. Este sistema fue diseñado para ser utilizado en dispositivos móviles que por lo general cuentan con pantallas táctiles como tablets y celulares. De esta manera, se agiliza el registro de los pedidos de los meseros y en las aplicaciones de delivery gastronómicas.',
      },
    ];
    this.arrayFaqs2 = [
      {
        id: 6,
        question:
          '¿Puedo tomar pedidos de Delivery y Take away más allá de los pedidos de las mesas?',
        answer:
          'Si. Con Núcleo Check Puedes tomar pedidos de delivery y take away. Los usuarios pueden tomar los pedidos de las mesas, los de delivery a domicilio y los de take away.',
      },
      {
        id: 7,
        question: '¿Cómo hago para comenzar a usar Núcleo Check?',
        answer:
          'Es simple. Te damos de alta como nuevo usuario, luego ingresas con tu usuario y contraseña para empezar a aprovechar las ventajas que Núcleo Check aporta a tu negocio.',
      },
      {
        id: 8,
        question: '¿Núcleo Check es un sistema nuevo?',
        answer:
          'Núcleo Check es la versión actualizada de un sistema que se viene desarrollando desde 2009, completamente online para facilitar el uso y las tareas de un negocio gastronómico.',
      },
      {
        id: 5,
        question:
          '¿Se puede diseñar el Plano del salón y ubicar las mesas como están en el negocio?',
        answer:
          'Es posible diseñar el plano de salón o ver las mesas una al lado de la otra. En caso de querer armar el plano del salón, se puede poner una imagen de fondo que simule el negocios y las mesas puede tener diferentes formas y tamaños según la cantidad de comensales que entren.',
      },
    ];
  }

  toggleFaq(index: number) {
    if (this.indexSelect === index) {
      this.indexSelect = 0;
    } else this.indexSelect = index;
  }
}
