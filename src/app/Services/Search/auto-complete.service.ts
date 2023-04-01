import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  private apiUrl:string = "http://api.weatherapi.com/v1/search.json?key=f2fdca5647a84d96add55847230403&q=";
  constructor(private http:HttpClient) { }

  autoComplete(location:string){
      return this.http.get<Object[]>(`${this.apiUrl}${location}`);
  }

}
