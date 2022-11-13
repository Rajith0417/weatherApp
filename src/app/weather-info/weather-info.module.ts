import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherInfoRoutingModule } from './weather-info-routing.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    WeatherInfoRoutingModule
  ]
})
export class WeatherInfoModule { }
