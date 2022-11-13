import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/shared/open-weather.service';
import { Router } from '@angular/router';
import { City } from './city.modal';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityName: string = ""
  city!: City
  cities: City[] = [];

  constructor(private openWeatherService: OpenWeatherService, private router: Router) { }

  ngOnInit(): void {
  }

  getCity(){
    this.openWeatherService.getCityInfo(this.cityName).subscribe(res=>{
      console.log(res);
      if(res.length == 1){
        this.city = res;
        console.log(res);
      }else{
        this.cities = res;
        console.log(this.cities);
      }
    },error=>{
      console.log(error);
    });
  }

  selectedCity(city: City){
    this.city = city;
    this.cities = [];
    this.getWeatherData();
    this.router.navigate(['/info']);
  }

  getWeatherData(){
    this.openWeatherService.getWeatherInfo(this.city.name, this.city.country).subscribe(res=>{
      console.log(res);
    });
  }

  trancByFunction(index: number, city: any): string {
    return city.name;
  }

}
