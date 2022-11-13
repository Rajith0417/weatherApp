import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor( private http: HttpClient) { }

  getCityInfo(cityName: string){
    return this.http.get<any>("https://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid="+environment.openWeatherAPI)
    .pipe(map((res: any)=>{
      return res;
    }));
  }

  getWeatherInfo(cityName: string, countryCode: string){
    return this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?q="+cityName+","+countryCode+"&APPID="+environment.openWeatherAPI)
    .pipe(map((res: any)=>{
      return res;
    }));
  }
}
