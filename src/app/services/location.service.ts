import { Injectable } from '@angular/core';
import { environment } from '../Environments/environments';

const currency: { [key: string]: string } = {
  AR: 'ARS',
  OTHERS: 'US',
};

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public userLocation?: string;
  public userCurrency!: string;

  constructor() {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<any> {
    return new Promise((res, rej) => {
      try {
        fetch(environment.API_LOCATION_URL)
          .then((res) => res.json())
          .then((data) => {
            res(this.getLocation(data.ip));
          });
      } catch (error) {}
    });
  }

  async getLocation(ip: string) {
    const res = await fetch(`https://ipinfo.io/${ip}?token=eb4243a27bae93`);
    const data = await res.json();
    this.userLocation = data.city;
    const country: string = data.country;
    this.userCurrency = currency[country]
      ? currency[country]
      : currency['OTHERS'];
  }

  // async getUserLocation(): Promise<[number, number]> {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(
  //       ({ coords }) => {
  //         resolve(this.getLocation(coords));
  //       },
  //       (err) => reject((this.userLocation = 'Sin geolocalización')),
  //     );
  //   });
  // }

  // getLocation(coords: any): Promise<any> {
  //   return fetch(
  //     `${environment.API_LOCATION_URL}${coords.latitude}+${coords.longitude}${environment.API_LOCATION_KEY}`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => (this.userLocation = data.results[0].components.state));
  // }
}
