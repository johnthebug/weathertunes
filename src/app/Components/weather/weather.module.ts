import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { WeatherContainerComponent } from './weather-container/weather-container.component';



@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    WeatherContainerComponent
  ]
})
export class WeatherModule { }
