import { Component } from '@angular/core';

interface Screenshots{
  id: number;
  src: string
}

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent {
imgHand = '../assets/img/Screenshots/hand.png';
imgScreen1 = '';
arrayScreenshots: Screenshots[] = []

ngOnInit(): void {
  this.arrayScreenshots = [
    {
      "id": 1,
      "src": "../assets/img/Screenshots/1.png" 
  },
  {
      "id": 2,
      "src": "../assets/img/Screenshots/2.png" 
  },
  {
      "id": 3,
      "src": "../assets/img/Screenshots/3.png" 
  },
  {
      "id": 4,
      "src": "../assets/img/Screenshots/4.png" 
  },
  {
      "id": 5,
      "src": "../assets/img/Screenshots/5.png" 
  }
  ]
}



}
