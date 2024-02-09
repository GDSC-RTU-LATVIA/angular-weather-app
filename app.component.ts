// src/app/app.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city = '';
  weatherData: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    const apiKey = '7624f8b1c48ea1673c829f519a95a230'; // Replace with your OpenWeatherMap API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const url = `${apiUrl}?q=${this.city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}
