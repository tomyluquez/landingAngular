import { Injectable } from '@angular/core';
import { environment } from '../Environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public userLocation?: string;

  constructor() {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve(this.getLocation(coords));
        },
        (err) => reject((this.userLocation = 'Sin geolocalización')),
      );
    });
  }

  getLocation(coords: any): Promise<any> {
    return fetch(
      `${environment.API_URL}${coords.latitude}+${coords.longitude}${environment.API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => (this.userLocation = data.results[0].components.state));
  }
}
