import { Component, Input } from '@angular/core';
import { WeatherDataService } from 'src/app/Services/Weather/weather-data.service';
import { Observable } from 'rxjs';
import { WeatherDetails } from 'src/app/Models/weather-details';
@Component({
  selector: 'wt-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() location:string="" ;

  currentWeather$ !: Observable<WeatherDetails> | null;

  constructor(private weatherService:WeatherDataService){}

  ngOnInit(){
    console.log(this.location);  
    this.getCurrentWeatherData(this.location);
  }

  getCurrentWeatherData(location:string){
     this.currentWeather$ =  this.weatherService.currentWeather(location) as Observable<WeatherDetails>;
      console.log(this.currentWeather$);
      
    }
}
