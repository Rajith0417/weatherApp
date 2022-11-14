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

  cityName: string = ""
  // city!: City;
  cities: City[] = [];

  constructor(private openWeatherService: OpenWeatherService, private router: Router) { }

  ngOnInit(): void {
  }

  getCity(){
    // this.openWeatherService.getCityInfo(this.cityName).subscribe(res=>{
    //   console.log(res);
    //   if(res.length == 1){
    //     this.city = res;
    //     console.log(res);
    //   }else{
    //     this.cities = res;
    //     console.log(this.cities);
    //   }
    // },error=>{
    //   console.log(error);
    // });
    // .pipe(map((res: any)=>{
    //   return res;
    // }));
    this.openWeatherService.getCityInfo(this.cityName).pipe(map((
    data: any[]) =>
    data.map(item => {
      return new City(
        item.name,
        item.country
      )
    })))
    .subscribe(res => {
      console.log(res);
      if(res.length == 1){
        // this.city = res;
        // console.log(res[0].name);
        this.selectedCity(res[0]);
      }else{
        this.cities = res;
        console.log(this.cities);
      }
    }, error=>{
      console.log(error);
    });
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
