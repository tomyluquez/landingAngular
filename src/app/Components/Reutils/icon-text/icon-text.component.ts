import { Component, Input } from '@angular/core';
import { Elements } from '../../about/about.component';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css']
})
export class IconTextComponent {
  @Input() element: Elements = {
    id: 0,
    icon: '',
    text: ''
  };

}
