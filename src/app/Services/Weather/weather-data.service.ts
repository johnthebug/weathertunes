import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherDetails } from 'src/app/Models/weather-details';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiUrl = "http://api.weatherapi.com/v1/current.json?key=f2fdca5647a84d96add55847230403&q="
  constructor(private http:HttpClient) { }

  currentWeather(location:string){
    return this.http.get<WeatherDetails>(`${this.apiUrl}${location}`);
  }
}
