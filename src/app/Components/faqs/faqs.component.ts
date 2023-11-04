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

  indexSelect = 0;

  ngOnInit(): void {
    this.arrayFaqs = [
      {
        id: 1,
        question: '¿Es seguro trabajar con un software en la nube?',
        answer:
          'Sin dudas trabajar en la nube es muchísimo más seguro que hacerlo con una PC en el negocio. Para garantizas un excelente servicio, nuestro sistema está alojado en los servidores de Microsoft (Azure) en los Estados Unidos donde cuéntan con los mejores protocolos de seguridad garantizando estar online 99.99% del tiempo.',
      },
      {
        id: 2,
        question: '¿Qué pasa si me quedo sin internet en el negocio?',
        answer:
          'No pasa nada, el sistema si bien es 100% web y depende de internet, también es responsive por lo cual podrás seguir utilizando desde tu celular sin problema.',
      },
      {
        id: 3,
        question: '¿Cuento con Soporte técnico en caso de necesitarlo?',
        answer:
          'Sí, todos los usuarios del sistema Núcleo Check cuenta con nuestra mesa de ayuda los 365 días del año. Al margen de esto, brindamos capacitaciones semanales ilimitadas para que aprovechen al máximo las prestaciones de nuestro software.',
      },
      {
        id: 4,
        question: '¿El sistema se puede usar con pantallas táctiles?',
        answer:
          'Sí, el sistema fue diseñado para poder ser utilizado eficientemente durante la toma de pedidos y la atención en el salón con pantalla táctil. Al ser un software 100% responsive puede ser utilizado en Tablets y Celulares sin problema.',
      },
    ];
    this.arrayFaqs2 = [
      {
        id: 6,
        question:
          '¿Puedo tomar pedidos de Delivery y Take away más allá de los pedidos de las mesas?',
        answer:
          ' Si, el sistema está pensado para poder tomar pedidos en mesas, a domicilio y de mostrador. Para agilizar la adición, contamos con dos pantallas separadas, una para el salón y otra para los pedidos de Delivery y Take Away.',
      },
      {
        id: 7,
        question: '¿Cómo hago para comenzar a usar Núcleo Check?',
        answer:
          'Una vez dado de alta solo deberás loguearte y comenzar a disfrutar de todas las funcionalidades que ofrecemos.',
      },
      {
        id: 8,
        question: '¿Núcleo Check es un sistema nuevo?',
        answer:
          'No, Núcleo Check es la evolución del sistema Núcleo IT Gastronómico el cual se viene desarrollando desde 2009. Esta nueva versión es 100% web, fue desarrollada con las últimas tecnologías que ofrece el mercado, aprovechando al máximo todos los años de experiencia en el rubro gastronómico.',
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
