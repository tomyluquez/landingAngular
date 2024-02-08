import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isFreeTrailMode!: boolean;

  constructor(private settingsServices: SettingsService) {
    this.settingsServices.getSettings().subscribe(({ settings }) => {
      this.isFreeTrailMode = settings.isFreeTrailMode;
    });
  }
}
