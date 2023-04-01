import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationSuggestion } from 'src/app/Models/location-suggestion';
import { AutoCompleteService } from 'src/app/Services/Search/auto-complete.service';
import { WeatherContainerComponent } from '../weather/weather-container/weather-container.component';

@Component({
  selector: 'wt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('searchInput') searchInput : any;
  @ViewChild('weather',{read : ViewContainerRef})  weather !: ElementRef;
  @ViewChild('weathercard',{read: ViewContainerRef}) weathercard !: ViewContainerRef;

  constructor(private searchLoc:AutoCompleteService){}

  isInput : boolean = false;
  isLoading : boolean = false;
  getWeatherData : boolean = false;
  searchLocation : string = '';
  location$ !: Observable<LocationSuggestion[]> | null;
  // locations : LocationSuggestion[] = [];
  onClick(){
    this.isLoading = true;
  }

  search(){
    console.log(this.searchLocation);
    this.searchLocation.trim().length > 0 ?this.isInput = true : this.isInput = false;
  }

  

  
  clear(){
    this.searchInput.nativeElement.value = '';
    this.isInput = false;
    this.location$ = null;
    this.searchLocation = '';
    this.getWeatherData = false;
  }

  autoCompleteLocation(location:any){

    this.searchLocation = location.target.value;
    console.log("search location is : "+this.searchLocation);
    if(this.searchLocation.trim().length > 0){
      this.location$ = this.searchLoc.autoComplete(this.searchLocation) as Observable<LocationSuggestion[]>
    }
    else{
      this.location$ = null;
    }

  }

  selectLocation(location:any){
    this.searchLocation = `${location.name}, ${location.region}, ${location.country}`;
    console.log("search location is : "+this.searchLocation);
    this.location$ = null;
    this.getWeatherData = true;
    this.fetchDataComponent();
  }

  fetchDataComponent(){
    const component = this.weathercard.createComponent(WeatherContainerComponent);
    component.instance.weatherData = this.searchLocation;
  }

}
