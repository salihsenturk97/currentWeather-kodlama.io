import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

getCurrentWeather(city:string):Observable<Weather>{
  return this.httpClient.get<Weather>("http://api.weatherstack.com/current?access_key=9cee9e9c447fdbe86e034a97bbcae83c&query="+city)
}



}

