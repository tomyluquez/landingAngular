import { Component } from '@angular/core';

interface Faqs {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  arrayFaqs: Faqs[] = []
  indexSelect = 0

  ngOnInit(): void {
    this.arrayFaqs = [
      {
        id: 1,
        question: '¿Qué es la prueba de Nucleo?',
        answer: 'Es una prueba de Nucleo que te permite probar el software de forma gratuita.'
      },
      {
        id: 2,
        question: '¿Qué es la prueba de Nucleo?',
        answer: 'Es una prueba de Nucleo que te permite probar el software de forma gratuita.'
      },
      {
        id: 3,
        question: '¿Qué es la prueba de Nucleo?',
        answer: 'Es una prueba de Nucleo que te permite probar el software de forma gratuita.'
      },
      {
        id: 4,
        question: '¿Qué es la prueba de Nucleo?',
        answer: 'Es una prueba de Nucleo que te permite probar el software de forma gratuita.'
      },
      {
        id: 5,
        question: '¿Qué es la prueba de Nucleo?',
        answer: 'Es una prueba de Nucleo que te permite probar el software de forma gratuita.'
      }
    ]
  }

  toggleFaq(index: number) {
    if(this.indexSelect === index){
      this.indexSelect = 0
    } else 
    this.indexSelect = index
  }
}
