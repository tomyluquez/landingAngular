import { Component, Input } from '@angular/core';
import { FormElements } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css'],
})
export class IconTextComponent {
  @Input() element: FormElements = {
    id: 0,
    icon: '',
    text: '',
  };
}
