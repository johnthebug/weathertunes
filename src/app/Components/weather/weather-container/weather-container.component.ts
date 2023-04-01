import { Component, Input } from '@angular/core';

@Component({
  selector: 'wt-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {
  @Input() weatherData!: string;

}
