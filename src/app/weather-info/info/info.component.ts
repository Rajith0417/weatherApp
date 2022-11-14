import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/shared/open-weather.service';
import { map } from 'rxjs/operators';
import { Info } from './info.modal';
import { ActivatedRoute } from '@angular/router';
// import { CelsiusPipe } from 'src/app/shared/pipe/celsius.pipe';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  selectedCity: any = {};
  cityInfo: any = [];
  errorMessage: string = '';

  constructor(
    private openWeatherService: OpenWeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedCity = params;
      // console.log(this.selectedCity);
    });
    this.getWeatherData();
  }

  getWeatherData() {
    if (this.selectedCity.name == '' && this.selectedCity.country == '') {
      this.errorMessage = 'Parameters are missing';
    } else {
      this.openWeatherService
        .getWeatherInfo(this.selectedCity.name, this.selectedCity.country)
        .pipe(
          map((data: any) => {
            console.log(data);
            return new Info(
              data.main.temp,
              data.main.pressure,
              data.main.humidity,
              data.wind.speed,
              data.wind.deg,
              data.weather[0].main,
              data.timezone,
              data.name,
              data.sys.country,
              'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
            );
          })
        )
        .subscribe({
          next: (res: Info) => {
            this.cityInfo = res;
            console.log(this.cityInfo);
          },
          error: (error) => {
            console.log(error);
            this.errorMessage = error.error.message;
          },
          complete: () => {},
        });
    }
  }
}
