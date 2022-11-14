import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/shared/open-weather.service';
import { Router } from '@angular/router';
import { City } from './city.modal';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityName: string = "";
  cities: City[] = [];
  errorMessage = "";

  constructor(private openWeatherService: OpenWeatherService, private router: Router) { }

  ngOnInit(): void {
  }

  getCity(){
    if(this.cityName == ""){
      this.errorMessage = "Please enter a city";
    }else {
      this.openWeatherService.getCityInfo(this.cityName).pipe(map((
        data: any[]) =>
        data.map(item => {
          return new City(
            item.name,
            item.country
          )
        })))
        .subscribe({
          next: (res) => {
            console.log(res);
            if(res.length == 1){
              this.selectedCity(res[0]);
            }else{
              this.cities = res;
              console.log(this.cities);
            }
          },
          error: (error) => {
            console.log(error);
            this.errorMessage = error.error.message;
          },
          complete: () => {

          }
        });
    }
  }

  selectedCity(city: City){
    // this.city = city;
    this.cities = [];
    this.router.navigate(['/info'], {queryParams: {name: city.name, county: city.country}});
  }

  trancByFunction(index: number, city: any): string {
    return city.name;
  }

}
